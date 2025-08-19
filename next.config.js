/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'ghreatnesslab.vercel.app'],
    unoptimized: true
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