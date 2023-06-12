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
        hostname: "i.dummyjson.com",
        port: "",
        pathname: "/data/products/**",
      },
      {
        protocol: "https",
        hostname: "mdbootstrap.com",
        port: "",
        pathname: "/img/logo/mdb-transaprent-noshadows.png",
      },
    ],
  },
};
