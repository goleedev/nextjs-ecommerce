module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['localhost:3000'],
  },
};

const withImages = require('next-images');
module.exports = withImages();
