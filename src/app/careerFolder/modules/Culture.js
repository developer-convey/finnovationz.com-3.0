import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import useScreenSize from "../hooks/useScreenSize";
import { cultureImages, getCultureImageUrls } from "../resources/cultureImages";
import "./Culture.css";

// Dynamically import the ImageSlider component with optimized loading
const ImageSlider = dynamic(() => import("../components/ImageSlider")
  .then(mod => mod.default), { 
  ssr: false,
  loading: () => <div className="loading-placeholder">Loading gallery...</div>
});

const Culture = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [displayedImages, setDisplayedImages] = useState([]);
  const [sideImages, setSideImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const screenSize = useScreenSize();
  const isMobile = screenSize === "mobile";
  const isTablet = screenSize === "tablet";
  const shuffleIntervalRef = useRef(null);
  const containerRef = useRef(null);

  // Memoize the image count calculation
  const getImageCount = useMemo(() => {
    if (isMobile) return 4;
    if (isTablet) return 6;
    return 5; // Main center images
  }, [isMobile, isTablet]);

  // Memoize image URLs array
  const imageUrls = useMemo(() => getCultureImageUrls(), []);

  // Initialize displayed images
  useEffect(() => {
    const count = getImageCount;
    const mainImages = cultureImages.slice(0, count);
    const sidePanelImages = cultureImages.slice(count, count + 4);
    setDisplayedImages(mainImages);
    setSideImages(sidePanelImages);
    setIsLoading(false);
  }, [getImageCount]);

  // Optimized image shuffling with intersection observer
  useEffect(() => {
    if (!containerRef.current || isLoading) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Start shuffling only when component is visible
          if (shuffleIntervalRef.current === null && 
              cultureImages.length > getImageCount) {
            shuffleIntervalRef.current = setInterval(() => {
              setDisplayedImages(prevImages => {
                const availableImages = cultureImages.filter(img => 
                  !prevImages.some(prevImg => prevImg.url === img.url)
                );
                
                if (availableImages.length === 0) return prevImages;
                
                const randomIndex = Math.floor(Math.random() * prevImages.length);
                const randomNewImage = availableImages[
                  Math.floor(Math.random() * availableImages.length)
                ];
                
                return prevImages.map((img, idx) => 
                  idx === randomIndex ? randomNewImage : img
                );
              });
            }, 15000);
          }
        } else {
          // Clear interval when component is not visible
          if (shuffleIntervalRef.current) {
            clearInterval(shuffleIntervalRef.current);
            shuffleIntervalRef.current = null;
          }
        }
      });
    }, { threshold: 0.1 });

    observer.observe(containerRef.current);

    // Add scroll event listener to pause shuffling
    const handleScroll = () => {
      if (shuffleIntervalRef.current) {
        clearInterval(shuffleIntervalRef.current);
        shuffleIntervalRef.current = null;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      if (shuffleIntervalRef.current) {
        clearInterval(shuffleIntervalRef.current);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isLoading, getImageCount]);

  const handleImageClick = useCallback((image) => {
    setSelectedImage(image.url);
  }, []);

  const handleCloseSlider = useCallback(() => {
    setSelectedImage(null);
  }, []);

  const handleExploreMore = useCallback(() => {
    console.log("Explore more clicked");
  }, []);

  // Optimized main images rendering
  const renderMainImages = useMemo(() => {
    return displayedImages.map((image, index) => (
      <div 
        key={`main-${image.url}`}
        className="culture-image-container"
        onClick={() => handleImageClick(image)}
      >
        <Image
          src={image.url}
          alt={image.alt}
          width={800}
          height={600}
          loading={index > 1 ? "lazy" : "eager"}
          priority={index <= 1}
          quality={index <= 1 ? 80 : 65}
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2VlZSIvPjwvc3ZnPg=="
        />
      </div>
    ));
  }, [displayedImages, handleImageClick]);

  // Optimized side images rendering
  const renderSideImages = useMemo(() => {
    return sideImages.map((image) => (
      <div key={`side-${image.url}`} className="side-image-container">
        <Image
          src={image.url}
          alt={image.alt}
          width={280}
          height={200}
          loading="lazy"
          quality={50}
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2VlZSIvPjwvc3ZnPg=="
        />
      </div>
    ));
  }, [sideImages]);

  return (
    <section 
      className={`culture-section ${isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop'}`} 
      ref={containerRef}
    >
      <div className="culture-container">
        <div className="culture-header">
          <h2>Office Culture</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
          <button className="explore-more-btn" onClick={handleExploreMore}>
            Explore more
          </button>
        </div>
        
        {isLoading ? (
          <div className="loading-placeholder">Loading culture images...</div>
        ) : (
          <div className="culture-wrapper">
            {/* Left side images */}
            {!isMobile && !isTablet && (
              <div className="side-images left">
                {renderSideImages.slice(0, 2)}
              </div>
            )}

            {/* Main center images */}
            <div className="culture-grid">
              {renderMainImages}
            </div>

            {/* Right side images */}
            {!isMobile && !isTablet && (
              <div className="side-images right">
                {renderSideImages.slice(2, 4)}
              </div>
            )}
          </div>
        )}
      </div>
      
      {selectedImage && (
        <ImageSlider 
          images={imageUrls}
          initialIndex={imageUrls.indexOf(selectedImage)}
          onClose={handleCloseSlider}
        />
      )}
    </section>
  );
};

export default Culture;