/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/ko-KR",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
