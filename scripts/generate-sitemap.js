const fs = require("fs");
const path = require("path");
const axios = require("axios");
const { ApolloClient, InMemoryCache, gql } = require('@apollo/client');

const SITE_URL = "https://www.finnovationz.com";
const BASE_DIR = path.join(__dirname, "../src");
const CHECK_FOLDERS = ["app", "pages"];

// Setup WordPress Apollo Client
const WPClient = new ApolloClient({
  uri: process.env.WEBSTORIES_API_URL || 'https://dev.webstories.finnovationz.com/graphql',
  cache: new InMemoryCache(),
});

const getPageFolders = (dirPath, root = "") => {
  let files = fs.readdirSync(dirPath);
  let result = [];

  files.forEach((file) => {
    let fullPath = path.join(dirPath, file);
    let relativePath = path.join(root, file);
    let stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      if (["components", "component", "calculatorFiles"].includes(file)) return;

      let pageFile = ["page.js", "index.js", "page.jsx"].find(f =>
        fs.existsSync(path.join(fullPath, f))
      );

      if (pageFile) {
        let pageFilePath = path.join(fullPath, pageFile);

        let cleanPath = "/" + relativePath.replace(/\\/g, "/");
        cleanPath = cleanPath.replace(/^\/app\//, "/").replace(/^\/pages\//, "/");
        if (!/\[.*\]/.test(cleanPath)) {
          result.push(cleanPath);
        }
      }

      result = [...result, ...getPageFolders(fullPath, relativePath)];
    }
  });

  return result;
};

const fetchData = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error.message);
    return null;
  }
};

const getNoIndexRoutes = async () => {
  const data = await fetchData("https://brockersbackend.finnovationz.com/api/noindex/get-noindex");
  return Array.isArray(data) ? data.filter(r => r.status === 'Active').map(r => r.url) : [];
};

const getBlogRoutes = async () => {
  const data = await fetchData(`https://blogbackend.finnovationz.com/api/blogs/list/user?page=1&limit=${Number.MAX_SAFE_INTEGER}`);
  return data?.responseData?.data?.map(blog => `/blog/${blog.keyword}`) || [];
};

const getWebStoriesRoutes = async () => {
  try {
    const { data } = await WPClient.query({
      query: gql`
        query GET_ALL_WEB_STORIES {
          webStories(first: 1000) {
            nodes {
              slug
            }
          }
        }
      `,
    });

    let webStoryRoutes = data?.webStories?.nodes?.map(story => `/web-stories/${story.slug}`) || [];

    // ✅ Add parent web-stories route
    if (!webStoryRoutes.includes("/web-stories")) {
      webStoryRoutes.unshift("/web-stories");
    }

    // ✅ Create standalone sitemap for web stories
    const webStoriesSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${webStoryRoutes.map(route => `  <url>
    <loc>${SITE_URL}${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>`).join("\n")}
</urlset>`;

    const webStoriesDir = path.join(__dirname, "../public");
    if (!fs.existsSync(webStoriesDir)) {
      fs.mkdirSync(webStoriesDir, { recursive: true });
    }

    fs.writeFileSync(path.join(webStoriesDir, "web-stories-sitemap.xml"), webStoriesSitemap);

    return webStoryRoutes;
  } catch (error) {
    console.error("Error fetching web stories:", error);
    return ["/web-stories"]; // At least return the parent if API fails
  }
};

const getWebinarRoutes = async () => {
  const data = await fetchData("https://brockersbackend.finnovationz.com/api/broker/all-brokers-list");
  return data?.data?.map(webinar => `/top-stock-brokers-in-india/${webinar.name.toLowerCase().replace(/\s+/g, "-")}`) || [];
};

const getCompareBrokerRoutes = async () => {
  const data = await fetchData("https://brockersbackend.finnovationz.com/api/broker/all-brokers-list");
  if (!data?.data) return [];

  let brokers = data.data;
  let compareRoutes = [];
  for (let i = 0; i < brokers.length; i++) {
    for (let j = i + 1; j < brokers.length; j++) {
      compareRoutes.push(`/compare-broker/${brokers[i].name.toLowerCase().replace(/\s+/g, '-')}-vs-${brokers[j].name.toLowerCase().replace(/\s+/g, '-')}`);
    }
  }
  return compareRoutes;
};

// Collect static pages
let allPages = [];
CHECK_FOLDERS.forEach((folder) => {
  let folderPath = path.join(BASE_DIR, folder);
  if (fs.existsSync(folderPath)) {
    if (folder === "pages" && ["index.js", "page.js", "index.jsx"].some(f => fs.existsSync(path.join(folderPath, f)))) {
      allPages.push("/");
    }
    allPages = [...allPages, ...getPageFolders(folderPath, folder)];
  }
});

Promise.all([
  getNoIndexRoutes(),
  getBlogRoutes(),
  getWebStoriesRoutes(),
  getWebinarRoutes(),
  getCompareBrokerRoutes()
])
  .then(([noIndexRoutes, blogRoutes, webStoriesRoutes, webinarRoutes, compareBrokerRoutes]) => {
    allPages = [...allPages, ...blogRoutes, ...webStoriesRoutes, ...webinarRoutes, ...compareBrokerRoutes];

    // Remove noindex pages
    allPages = allPages.filter(page => {
      const isNoIndex = noIndexRoutes.some(noIndexPage => noIndexPage === `${SITE_URL}${page}`);
      return !isNoIndex;
    });

    // Remove duplicates
    allPages = [...new Set(allPages)];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${SITE_URL}${page === "/" ? "" : page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>`).join("\n")}
</urlset>`;

    fs.writeFileSync(path.join(__dirname, "../public/sitemap.xml"), sitemap);
  })
  .catch(error => {
    console.error("Error generating sitemap:", error);
    process.exit(1);
  });
