module.exports = {
  images: {
    //enter the domain or subdomain where you have WordPress installed
    domains: [`${new URL(process.env.WP_BACKEND_URL).host}`],
    // deviceSizes: [150, 300, 768, 958]
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: { and: [/\.(js|ts)x?$/] },
      use: ['@svgr/webpack'],
    });
    return config;
  }
}
