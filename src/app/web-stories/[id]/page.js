"use client";

export const dynamic = "force-static";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import WPClient from "../../services/apoloclient";
import { GET_ALL_WEB_STORIES } from "../../web-storiesFolder/components/getAllWebStories";

function WebStoryPage() {
    const { id } = useParams();
    const [story, setStory] = useState(null);
    const [images, setImages] = useState([]);
    const [outlinks, setOutlinks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showOutlinks, setShowOutlinks] = useState(false); // Show "Learn More" only after images are loaded

    useEffect(() => {
        document.body.style.overflowY = "auto";

        return () => {
            document.body.style.overflowY = "auto";
        };
    }, []);

    useEffect(() => {
        const fetchStory = async () => {
            setLoading(true);
            try {
                const { data } = await WPClient.query({
                    query: GET_ALL_WEB_STORIES,
                });

                const selectedStory = data.webStories.nodes.find((story) => story.slug === id);

                if (!selectedStory) {
                    setError("Story not found");
                    setStory(null);
                    setLoading(false);
                    return;
                }

                setStory(selectedStory);

                const cleanContent = selectedStory?.content?.replace(/<\/?p>/g, "");

                const pagesWithLinks = parseAMPStoryPages(cleanContent);
                const extractedOutlinks = pagesWithLinks.flatMap((page) => page.outlinks);

                // Extract images
                const ampImages = [...cleanContent.matchAll(/<amp-img[^>]+src="(.*?)"/g)].map(m => m[1]);

                setImages(ampImages);
                setOutlinks(extractedOutlinks);
                setLoading(false);

            } catch (error) {
                console.error("Error fetching story:", error);
                setError("Failed to load story. Please try again later.");
                setLoading(false);
            }
        };

        if (id) {
            fetchStory();
        }
    }, [id]);

    // Show "Learn More" button only after images are loaded
    useEffect(() => {
        if (images.length > 0) {
            setShowOutlinks(true);
        }
    }, [images]);

    const parseAMPStoryPages = (storyContent) => {
        const pages = [...storyContent?.matchAll(/<amp-story-page[^>]+id="([^"]+)"[^>]*>(.*?)<\/amp-story-page>/gs)];

        return pages.map((match, index) => {
            const pageId = match[1];
            const pageContent = match[2];

            const outlinks = [...pageContent?.matchAll(
                /<amp-story-page-outlink[^>]*?(?:cta-image=['"]([^'"]*?)['"])?[^>]*?>\s*?<a[^>]*?href=['"]([^'"]*?)['"]/g
            )].map(outlinkMatch => ({
                ctaImage: outlinkMatch[1] || null,
                link: outlinkMatch[2],
                pageIndex: index
            }));

            return { pageId, pageContent, outlinks };
        });
    };

    if (loading) {
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                    width: "100%",
                }}
            >
                <div
                    style={{
                        width: "40px",
                        height: "40px",
                        border: "4px solid rgba(0, 0, 255, 0.3)",
                        borderTop: "4px solid blue",
                        borderRadius: "50%",
                        animation: "spin 1s linear infinite",
                    }}
                ></div>

                <span style={{ fontSize: "18px", fontWeight: "bold", color: "blue", marginLeft: "10px" }}>Loading...</span>
                <style>
                    {`
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                    `}
                </style>
            </div>
        );
    }

    return (
        <>
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
                <script async src="https://cdn.ampproject.org/v0.js"></script>
                <script async src="https://cdn.ampproject.org/v0/amp-story-1.0.js" custom-element="amp-story"></script>
            </head>

            {images.length > 0 ? (
                <amp-story
                    standalone=""
                    publisher="finnovationz-webstories"
                    publisher-logo-src="https://dev.webstories.finnovationz.com/wp-content/uploads/2025/02/finnovationz-logo-Copy.jpg"
                    title={story?.title}
                    poster-portrait-src={images[0]}
                >
                    {images.map((imgSrc, index) => {
                        const outlinkForImage = outlinks.find(outlink => outlink.pageIndex === index);

                        return (
                            <amp-story-page key={index} id={`page-${index + 1}`} auto-advance-after="7s">
                                <amp-story-grid-layer template="fill" className="grid-layer">
                                    <amp-img
                                        src={imgSrc}
                                        width="720"
                                        height="1280"
                                        layout="responsive"
                                        alt={`Story Image ${index}`}
                                    />
                                </amp-story-grid-layer>

                                {outlinkForImage && outlinkForImage.link && showOutlinks && ( 
                                    <amp-story-page-outlink
                                        layout="nodisplay"
                                        cta-image={outlinkForImage.ctaImage}
                                    >
                                        <a href={outlinkForImage.link}>Learn More</a>
                                    </amp-story-page-outlink>
                                )}
                            </amp-story-page>
                        );
                    })}
                </amp-story>
            ) : (
                <amp-story-page id="no-images">
                    <amp-story-grid-layer template="fill">
                        <h2 style={{ color: "white", textAlign: "center" }}>No Images Found</h2>
                    </amp-story-grid-layer>
                </amp-story-page>
            )}
        </>
    );
}

export default WebStoryPage;
