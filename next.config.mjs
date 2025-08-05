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
    domains: ["websitevideos2020.s3.ap-south-1.amazonaws.com", "dev.webstories.finnovationz.com",'websitevideos2020.s3.ap-south-1.amazonaws.com'],
  },
};

export default nextConfig;
