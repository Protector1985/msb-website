const { default: axios } = require("axios");

const fetchDynamicBlogRoutes = async () => {
  let allPosts = [];
  let page = 1;
  let hasMorePosts = true;

  while (hasMorePosts) {
    const response = await axios.get(`${process.env.WORDPRESS_API}/posts`, {
      params: {
        per_page: 100,  // Adjust this based on your API limits
        page: page,
      },
    });

    if (response.data.length > 0) {
      allPosts = [...allPosts, ...response.data];
      page++;
    } else {
      hasMorePosts = false;
    }
  }

  return allPosts.map((post) => `/blog/details/${post.id}/${post.slug}`);
};

module.exports = {
  siteUrl: 'https://www.msbprotection.com',
  generateRobotsTxt: true,
  exclude: [
    "/coming-soon",
    "/with-left-sidebar/",
    "/with-right-sidebar/",
    "/api/get-token/",
    "/forgot-password/",
  ],
  additionalPaths: async (config) => {
    const dynamicBlogRoutes = await fetchDynamicBlogRoutes();
    return dynamicBlogRoutes.map((route) => ({
      loc: `${config.siteUrl}${route}`,
      changefreq: "daily",
      priority: 0.8,
      lastmod: new Date().toISOString(),
    }));
  },
  transform: async (config, path) => {
    console.log("Processing path:", path);
    if (path === "/api/get-token" || path === "/api/get-token/") {
      console.log("Excluding path:", path);
      return null;
    }
    return {
      loc: `${config.siteUrl}${path}`,
      changefreq: "daily",
      priority: 1.0,
      lastmod: new Date().toISOString(),
    };
  },
};