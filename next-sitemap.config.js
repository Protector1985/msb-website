const { default: axios } = require("axios");

const fetchDynamicBlogRoutes = async () => {
  const posts = await axios.get(`${process.env.WORDPRESS_API}/posts`);
  return posts.data.map((post) => `/blog/details/${post.id}/${post.slug}`);
};

module.exports = {
  siteUrl: process.env.SITE_URL,
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
