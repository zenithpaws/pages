module.exports = {
    siteUrl: 'https:/www.zenithpaws.dev', // Replace with your site URL
    generateRobotsTxt: true,
    priority: 0.7, // Default priority for all pages
    changefreq: 'daily', // Default change frequency
    sitemapSize: 5000, // Default max size of the sitemap
    exclude: ['/404'], // Exclude certain paths (optional)
    transform: async (config, path) => {
        if (path === '/') {
            return {
                loc: path,
                priority: 1.0, // Set priority of main page to highest
                changefreq: 'daily',
                lastmod: new Date().toISOString(),
            };
        }

        // Default return for all other pages
        return {
            loc: path,
            priority: config.priority,
            changefreq: config.changefreq,
            lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
        };
    }
};
