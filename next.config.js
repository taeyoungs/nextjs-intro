const API_KEY = '93938de29ee06b9d46369c6d6d363f01';

module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/contact',
        destination: '/profile',
        permanent: false,
      },
      {
        source: '/contact/:postId',
        destination: '/posts/:postId',
        permanent: false,
      },
      {
        source: '/blog/:path*',
        destination: '/profile/:path*',
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/api/movies',
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
    ];
  },
};
