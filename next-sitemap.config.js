const { default: axios } = require("axios");

const fetchDynamicBlogRoutes = async () => {
  // Replace with your actual API call or function to fetch posts
  const posts = await axios.get(`${process.env.WORDPRESS_API}/posts`);
  return posts.data.map((post) => `/blog/details/${post.id}/${post.slug}`);
};

module.exports = {
  siteUrl: process.env.SITE_URL,
  generateRobotsTxt: true,
  exclude:
    ["/coming-soon"],
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
    // Customize sitemap entries
    return {
      loc: `${config.siteUrl}${path}`,
      changefreq: "daily",
      priority: 1.0,
      lastmod: new Date().toISOString(),
    };
  },
};
