module.exports = {
  siteUrl: process.env.SITE_URL || "http://localhost:3000",
  generateRobotsTxt: true,
  // exclude: ['/'], // Exclude unwanted paths
  transform: async (config, path) => {
    if(process.env.COMING_SOON !== "OFF") {
      if (path === "/") {
        return {
          loc: `${config.siteUrl}${path}`,
          changefreq: "daily",
          priority: 1.0,
          lastmod: new Date().toISOString(),
        };
      }
    } else {
      return {
        loc: `${config.siteUrl}${path}`,
        changefreq: "daily",
        priority: 1.0,
        lastmod: new Date().toISOString(),
      };

    }
    return undefined;
  },
};
