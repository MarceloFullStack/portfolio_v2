/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compiler: {
        // ssr and displayName are configured by default
        styledComponents: true
    },
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true
    },
    experimental: {
        outputStandalone: true
    },
    trailingSlash: true
}

module.exports = nextConfig
