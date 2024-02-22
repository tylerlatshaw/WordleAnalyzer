/** @type {import('next-sitemap').IConfig} */

module.exports = {
    siteUrl: process.env.BASE_URL,
    generateIndexSitemap: false,
    changefreq: "monthly",
    generateRobotsTxt: true,
    exclude: ["/api/*", "/sitemap.xml"], 
};  