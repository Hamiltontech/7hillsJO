// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

const withPWA = require('next-pwa')({
  
  dest: 'public',
  register: true,
    skipWaiting: true,
    disable:process.env.NODE_ENV === 'development'
})



module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: ['cdn-icons-png.flaticon.com', 'img.freepik.com', 'codedbychavez.hashnode.dev', 'www.hst.jo'],
  }, 
})


