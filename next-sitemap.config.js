const { default: axios } = require("axios");
const fs = require("fs");
const path = require("path");

const fetchDynamicBlogRoutes = async () => {
  const posts = await axios.get(`${process.env.WORDPRESS_API}/posts`);
  return posts.data.map((post) => `/blog/details/${post.id}/${post.slug}`);
};

const generateSitemapFiles = (routes, config) => {
  const chunkSize = 10;
  const chunks = [];

  // Split routes into chunks of 10
  for (let i = 0; i < routes.length; i += chunkSize) {
    chunks.push(routes.slice(i, i + chunkSize));
  }

  // Generate sitemap index file
  const sitemapIndexContent = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${chunks
    .map(
      (_, index) => `  <sitemap>
    <loc>${config.siteUrl}/sitemap-${index}.xml</loc>
  </sitemap>`
    )
    .join("\n")}\n</sitemapindex>`;

  fs.writeFileSync(path.join("public", "sitemap.xml"), sitemapIndexContent);

  // Generate each sitemap file
  chunks.forEach((chunk, index) => {
    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${chunk
      .map(
        (route) => `  <url>
    <loc>${config.siteUrl}${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>`
      )
      .join("\n")}\n</urlset>`;

    fs.writeFileSync(path.join("public", `sitemap-${index}.xml`), sitemapContent);
  });
};

module.exports = {
  siteUrl: "https://www.msbprotection.com",
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
    generateSitemapFiles(dynamicBlogRoutes, config);

    // Return an empty array since we handle sitemap generation manually
    return [];
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
