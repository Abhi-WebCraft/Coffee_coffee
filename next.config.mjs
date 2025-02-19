const { protocol, hostname, port, pathname } = new URL(
  process.env.WORDPRESS_API_URL,
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    forceSwcTransforms: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'secure.gravatar.com',
        port,
        pathname: '/avatar/**',
      },
      {
        protocol: 'https',
        hostname: 'blog.computyne.com',
        port,
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'www.computyne.com', // Add this
        pathname: '/wp-content/uploads/**', // Add this
      },
    ],
  },
  async redirects() {
    return [
      // Your existing redirects
    ];
  },
};

export default nextConfig;
