const { default: axios } = require("axios");
const fs = require("fs");
const path = require("path");

const fetchDynamicBlogRoutes = async () => {
  const posts = await axios.get(`${process.env.WORDPRESS_API}/posts`);
  return posts.data.map((post) => `/blog/details/${post.id}/${post.slug}`);
};

const generateSitemapIndex = (numOfSitemaps) => {
  let sitemapIndexContent = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  
  for (let i = 0; i < numOfSitemaps; i++) {
    sitemapIndexContent += `  <sitemap>\n    <loc>https://www.msbprotection.com/sitemap-${i}.xml</loc>\n  </sitemap>\n`;
  }
  
  sitemapIndexContent += `</sitemapindex>`;
  
  fs.writeFileSync(path.join(__dirname, "public", "sitemap-index.xml"), sitemapIndexContent);
};

const generateSitemap = (routes, index) => {
  let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  
  routes.forEach((route) => {
    sitemapContent += `  <url>\n    <loc>https://www.msbprotection.com${route}</loc>\n    <lastmod>${new Date().toISOString()}</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
  });
  
  sitemapContent += `</urlset>`;
  
  fs.writeFileSync(path.join(__dirname, "public", `sitemap-${index}.xml`), sitemapContent);
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
    const chunkSize = 10;
    const chunks = [];
    
    for (let i = 0; i < dynamicBlogRoutes.length; i += chunkSize) {
      chunks.push(dynamicBlogRoutes.slice(i, i + chunkSize));
    }

    chunks.forEach((chunk, index) => generateSitemap(chunk, index));
    generateSitemapIndex(chunks.length);

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
