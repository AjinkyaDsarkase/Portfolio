/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export so the site can be deployed to Vercel, Netlify, or GitHub Pages with no backend.
  output: 'export',
  images: {
    // next/image's optimization API needs a server; static export has none.
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
