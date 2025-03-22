const { default: axios } = require("axios");
const fs = require("fs");
const path = require("path");

const fetchDynamicBlogRoutes = async () => {
  const posts = await axios.get(`${process.env.WORDPRESS_API}/posts`);
  return posts.data.map((post) => `/blog/details/${post.id}/${post.slug}`);
};

// Utility function to write sitemap XML files
const writeSitemapFile = (filename, urls) => {
  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map(
      (url) => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
    )
    .join("\n")}\n</urlset>`;

  fs.writeFileSync(path.join(__dirname, "public", filename), sitemapContent);
};

// Generate Sitemap Index
const writeSitemapIndex = (count, siteUrl) => {
  const sitemapIndexContent = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${Array.from(
    { length: count },
    (_, i) =>
      `  <sitemap>\n    <loc>${siteUrl}/sitemap-${i}.xml</loc>\n  </sitemap>`
  ).join("\n")}\n</sitemapindex>`;

  fs.writeFileSync(
    path.join(__dirname, "public", "sitemap.xml"),
    sitemapIndexContent
  );
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

    const allRoutes = dynamicBlogRoutes.map((route) => ({
      loc: `${config.siteUrl}${route}`,
      changefreq: "daily",
      priority: 0.8,
      lastmod: new Date().toISOString(),
    }));

    // Split routes into chunks of 10
    const chunks = [];
    for (let i = 0; i < allRoutes.length; i += 10) {
      chunks.push(allRoutes.slice(i, i + 10));
    }

    // Write individual sitemap files
    chunks.forEach((chunk, idx) => {
      writeSitemapFile(`sitemap-${idx}.xml`, chunk);
    });

    // Write sitemap index
    writeSitemapIndex(chunks.length, config.siteUrl);

    // Returning an empty array since we handle sitemap generation manually
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