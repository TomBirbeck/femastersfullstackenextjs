/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ['bcrypt'],
  },
  // webpack(config) {
  //   config.experiments = { ...config.experiments, topLevelAwait: true }
  //   return config
  // }
};

module.exports = nextConfig;
