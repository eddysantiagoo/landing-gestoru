/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // Disable webpack module resolution strict mode
  webpack: (config) => {
    // Disable resolving module paths strictly
    config.resolve.extensionAlias = {
      '.js': ['.js', '.jsx', '.ts', '.tsx'],
      '.mjs': ['.mjs', '.mjsx', '.mts', '.mtsx'],
    };
    
    // Turn off webpack5 module not found errors
    config.ignoreWarnings = [
      { module: /node_modules/ },
    ];
    
    return config;
  },
  // Disable eslint during build to prevent errors
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Disable TypeScript type checking during build
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
