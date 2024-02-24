/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com",
        pathname: "/product-images/**",
      },
      {
        protocol: "https",
        hostname: "mdbootstrap.com",
        pathname: "/img/logo/mdb-transaprent-noshadows.png",
      },
    ],
  },
};
