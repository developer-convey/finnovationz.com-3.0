const fs = require("fs");
const path = require("path");

const SITE_URL = "https://finnovationz.com";
const BASE_DIR = path.join(__dirname, "../src");
const CHECK_FOLDERS = ["app", "pages"];

const containsNoIndex = (filePath) => {
    if (!fs.existsSync(filePath)) return false;
    const content = fs.readFileSync(filePath, "utf-8");
    return /<meta[^>]+name=["']robots["'][^>]+content=["'][^"']*noindex[^"']*["']/i.test(content);
};

const getPageFolders = (dirPath, root = "") => {
    let files = fs.readdirSync(dirPath);
    let result = [];

    files.forEach((file) => {
        let fullPath = path.join(dirPath, file);
        let relativePath = path.join(root, file);
        let stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            if (relativePath.split(path.sep).includes("components") || relativePath.split(path.sep).includes("component")) {
                return;
            }
            
            let folderFiles = fs.readdirSync(fullPath);
            let pageFile = ["page.js", "index.js", "page.jsx"].find(f => folderFiles.includes(f));

            if (pageFile) {
                let pageFilePath = path.join(fullPath, pageFile);
                if (containsNoIndex(pageFilePath)) {
                    return;
                }

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

let allPages = [];
CHECK_FOLDERS.forEach((folder) => {
    let folderPath = path.join(BASE_DIR, folder);
    if (fs.existsSync(folderPath)) {
        allPages = [...allPages, ...getPageFolders(folderPath, folder)];
    }
});

if (allPages.length === 0) {
    process.exit(0);
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
        .map(
            (page) => `
    <url>
        <loc>${SITE_URL}${page}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
    </url>`
        )
        .join("")}
</urlset>`;

fs.writeFileSync(path.join(__dirname, "../public/sitemap.xml"), sitemap);
