/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    // basePath: '/karim24', // Add your repository name here
    // assetPrefix: '/karim24/', // Add your repository name with trailing slash
    images: {
        unoptimized: true,
    },

    // i18n: {
    //     // These are the locales you want to support
    //     locales: ['en', 'ar'],
    //     // This is the default locale you want to use
    //     defaultLocale: 'ar',
    //     // This determines which locale is used when visiting
    //     // a non-locale prefixed path, e.g. `/dashboard`
    //     localeDetection: true,
    // },
}

export default nextConfig;
