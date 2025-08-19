/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  poweredByHeader: false,
  images: {
    domains: ['localhost', 'ghreatnesslab.vercel.app'],
    formats: ['image/webp', 'image/avif'],
    unoptimized: false
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      use: {
        loader: 'file-loader',
      },
    });
    return config;
  },
}

module.exports = nextConfig