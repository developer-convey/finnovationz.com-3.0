import React, { useState, useCallback, useMemo } from "react";
import ReactPlayer from "react-player/lazy"; // Lazy load the ReactPlayer
import data from "./data.json";
import './videos.css';

const Videos = () => {
  const [visibleVideos, setVisibleVideos] = useState(8);
  const [playingIndex, setPlayingIndex] = useState(null); // Track the index of the video that's currently playing
  const [loading, setLoading] = useState(false); // Track if the video is loading

  const handleShowMore = useCallback(() => {
    setVisibleVideos((prev) => prev + 8);
  }, []);

  const handleVideoClick = (index) => {
    if (playingIndex === index) return; // If the video is already playing, do nothing
    setLoading(true); // Set loading state to true
    setPlayingIndex(index); // Set the clicked video index to start playing
  };

  const handleReady = () => {
    setLoading(false); // Set loading state to false when the video is ready
  };

  const youtubeConfig = useMemo(
    () => ({
      youtube: {
        playerVars: {
          modestbranding: 1, // Reduce YouTube logo visibility
          rel: 0, // Prevent showing related videos
          controls: 1, // Show player controls (including video timer)
          showinfo: 0, // Remove video info (title, share button)
        },
      },
    }),
    []
  );

  return (
    <div className="md:px-0 md:pt-5">
      <h1 className="font-extrabold text-4xl text-center md:my-10 my-2 mt-5">
        Trust is built with{" "}
        <span style={{ color: "#377BDC" }}>Consistency</span>
      </h1>
      <h4 className="text-2xl text-center md:my-10 my-2 mt-4">
        Discover why our customers love us through their own words.
      </h4>
      <div className="review-card">
        <div className="review-cards">
          {data.videos.slice(0, visibleVideos).map((video, index) => (
            <div
              key={index}
              className="w-full review-card-div"
              style={{
                borderRadius: "10px",
                overflow: "hidden",
                height: "530px",
                position: "relative",
                backgroundColor: playingIndex === index && loading ? "#000" : "transparent", // Black background while loading
              }}
              onClick={() => handleVideoClick(index)} // Handle the click event
            >
              {loading && playingIndex === index && (
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#000", // Ensure black background during loading
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 10,
                  }}
                >
                  <div className="spinner-border" role="status"></div> {/* Loading spinner */}
                </div>
              )}
              <ReactPlayer
                config={youtubeConfig}
                url={video.url}
                width="100%" // Full width of the parent container
                height="100%" // Full height of the parent container
                light={playingIndex !== index ? video.image : null} // Show thumbnail if video is not playing
                controls // Show controls
                playing={playingIndex === index} // Start playing if this video is clicked
                onReady={handleReady} // Handle the video ready event
                style={{
                  objectFit: "contain",
                  width: "100%",
                  height: "100%",
                }} // Ensures the thumbnail image fits properly
              />
            </div>
          ))}
        </div>
      </div>
      {visibleVideos < data.videos.length && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="review-show-more-button"
            style={{ border: "1px solid #377BDC", borderRadius: "20px" }}
            onClick={handleShowMore}
          >
            <h4 style={{ padding: "10px 20px", color: "#377BDC" }}>
              Show More
            </h4>
          </div>
        </div>
      )}
    </div>
  );
};

export default Videos;
