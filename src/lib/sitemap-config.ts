export const sitemapConfig = {
    baseUrl: 'https://byob.page',
    exclude: [
        /^\/dash/,       // Hides dashboard (RegExp)
        '/api',          // Hides API (String prefix)
        '/auth/callback',
        '/admin'
    ],
    additionalRoutes: [
        // '/blog/manual-entry-if-needed'
    ]
};