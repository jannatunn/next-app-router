/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['static.nike.com'], // Tambahkan domain lain jika diperlukan
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com',
        port: '',
        pathname: '/img/logos/**',
      },
    ],
  },
}

module.exports = nextConfig
