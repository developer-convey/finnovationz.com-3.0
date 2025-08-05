/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/blogs/:slug*",
        destination: "/blog/:slug*",
        permanent: true, 
      },
      {
        source: "/courses",
        destination: "/",
        permanent: true, 
      },
      {
        source: "/testimonial/:slug*",
        destination: "/review/:slug*",
        permanent: true, 
      },
      {
        source: "/finnovationz-finance-academy/:slug*",
        destination: "/finance-club-pro/:slug*",
        permanent: true, 
      },
    ]
  },

  images: {
    domains: [
      'api-ap-south-mum-1.openstack.acecloudhosting.com',
      'img.icons8.com',
      'dev.webstories.finnovationz.com',
      'websitevideos2020.s3.ap-south-1.amazonaws.com'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api-ap-south-mum-1.openstack.acecloudhosting.com',
        port: '8080',
        pathname: '/websitevideos2020/images/**',
      },
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
        pathname: '/**',
      },
    ],
  },
  // ... existing config
};

module.exports = nextConfig; 