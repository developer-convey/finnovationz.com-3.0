'use client';


import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import axios from 'axios';
import config from './config/index';
import React from 'react';


export default function Meta() {
  const pathname = usePathname();
  const [noIndexPaths, setNoIndexPaths] = useState([]);
  const [canonicalLinks, setCanonicalLinks] = useState({});
  const [isGlobalNoIndex, setIsGlobalNoIndex] = useState(false);
 
  const [globalGtmUrl, setGlobalGtmUrl] = useState(null);
  const [globalFbPixelUrl, setGlobalFbPixelUrl] = useState(null);
  const [pageGtmUrl, setPageGtmUrl] = useState(null);
  const [pageFbPixelUrl, setPageFbPixelUrl] = useState(null);


  useEffect(() => {
    const fetchMetaData = async () => {
      try {
        const [noIndexResponse, canonicalResponse, trackingResponse] = await Promise.all([
          axios.get(`${config.apiUrlNoindex}/get-noindex`),
          axios.get(`${config.apiUrlCanonical}/list`),
          axios.get(`${config.apiUrlTags}/getintegrations`),
        ]);


        let globalNoIndex = false;
       
        // Process NoIndex data
        const activeNoIndexPaths = Array.isArray(noIndexResponse.data)
          ? noIndexResponse.data
              .filter(entry => entry.status === 'Active')
              .map(entry => {
                try {
                  const path = new URL(entry.url, window.location.origin).pathname;
                  if (path === '/' || path === '') globalNoIndex = true;
                  return path;
                } catch {
                  return '';
                }
              })
              .filter(path => path.length > 0)
          : [];


        setNoIndexPaths(activeNoIndexPaths);
        setIsGlobalNoIndex(globalNoIndex);
       
        // Process Canonical data
     const activeCanonicalLinks = {};

        if (Array.isArray(canonicalResponse.data)) {
          canonicalResponse.data
            .filter(entry => entry.status === "Active")
            .forEach(entry => {
              try {
                const sitePageURL = new URL(entry.url);  // site URL you got
                const currentPageURL = new URL(window.location.href);  // current page URL
        console.log(sitePageURL)
                if (sitePageURL.origin === currentPageURL.origin && sitePageURL.pathname === currentPageURL.pathname) {
                  // Only if the full URL (origin + path) matches
                  activeCanonicalLinks[currentPageURL.pathname] = entry.canonicalUrl;
                }
              }catch (error) {
                console.error("Invalid URL format:", entry.url);
              }
            });
        }
        
        setCanonicalLinks(activeCanonicalLinks);


        // Process Tracking URLs
        let globalGtm = null;
        let globalFbPixel = null;
        let pageGtm = null;
        let pageFbPixel = null;

        if (Array.isArray(trackingResponse.data.integrations)) {
          trackingResponse.data.integrations.forEach(entry => {
            try {
              const urlObj = new URL(entry.url, window.location.origin);
              const fullUrl = entry.url;


              if (entry.status === 'Active') {
                if (entry.globalIntegrationId) {
                  if (entry.integrationType === 'GTM') {
                    globalGtm = fullUrl;
                  } else if (entry.integrationType === 'FB_PIXEL') {
                    globalFbPixel = fullUrl;
                  }
                } else if (urlObj.pathname === pathname) {
                  if (entry.integrationType === 'GTM') {
                    pageGtm = fullUrl;
                  } else if (entry.integrationType === 'FB_PIXEL') {
                    pageFbPixel = fullUrl;
                  }
                }
              }
            } catch {
              console.error('Invalid URL format:', entry.url);
            }
          });
        } else {
          console.error('Unexpected tracking data format:', trackingResponse.data);
        }


        setGlobalGtmUrl(globalGtm);
        setGlobalFbPixelUrl(globalFbPixel);
        setPageGtmUrl(pageGtm);
        setPageFbPixelUrl(pageFbPixel);
      } catch (error) {
        console.error('Error fetching metadata:', error);
      }
    };


    fetchMetaData();
  }, [pathname]);


  if (isGlobalNoIndex) {
    return <meta name='robots' content='noindex, nofollow' />;
  }


  const isNoIndexPage = noIndexPaths.includes(pathname);
  const canonicalHref = canonicalLinks[pathname];

  return (
    <>
      {isNoIndexPage && <meta name='robots' content='noindex, nofollow' />}
      {canonicalHref && <link rel='canonical' href={canonicalHref} />}
      {isNoIndexPage && (
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              '${globalGtmUrl}';f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer');
            `,
          }}
        />
      )}
      {isNoIndexPage && (
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              '${pageGtmUrl}';f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer');
            `,
          }}
        />
      )}
    </>
  );
}



