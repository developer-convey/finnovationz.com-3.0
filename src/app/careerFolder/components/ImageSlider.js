import React, { useState, useEffect, useCallback, useRef, useMemo } from "react";
import Image from "next/image";
import './ImageSlider.css';

const ImageSlider = ({ images, initialIndex = 0, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState(new Set());
  const preloadTimeoutRef = useRef(null);
  const imageRef = useRef(null);
  const isInitialMount = useRef(true);

  // Preload the first image with a delay to avoid blocking the main thread
  useEffect(() => {
    // Clear any existing timeout
    if (preloadTimeoutRef.current) {
      clearTimeout(preloadTimeoutRef.current);
    }

    // Delay preloading to prioritize critical content
    preloadTimeoutRef.current = setTimeout(() => {
      const preloadImages = async () => {
        setIsLoading(true);
        // Only preload the current image initially for faster LCP
        const currentImage = images[currentIndex];
        
        if (!loadedImages.has(currentImage)) {
          try {
            await new Promise((resolve, reject) => {
              const img = new Image();
              img.src = currentImage;
              img.onload = () => {
                setLoadedImages(prev => new Set([...prev, currentImage]));
                resolve();
              };
              img.onerror = reject;
            });
          } catch (error) {
            console.error('Error preloading image:', error);
          }
        }
        
        setIsLoading(false);
      };

      preloadImages();
    }, 50); // Reduced delay for better UX

    return () => {
      if (preloadTimeoutRef.current) {
        clearTimeout(preloadTimeoutRef.current);
      }
    };
  }, [currentIndex, images, loadedImages]);

  // Preload next and previous images after the current one is loaded
  useEffect(() => {
    if (!loadedImages.has(images[currentIndex])) return;
    
    const preloadAdjacentImages = () => {
      const nextIndex = (currentIndex + 1) % images.length;
      const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
      
      const imagesToPreload = [images[nextIndex], images[prevIndex]];
      
      imagesToPreload.forEach(imageUrl => {
        if (!loadedImages.has(imageUrl)) {
          const img = new Image();
          img.src = imageUrl;
          img.onload = () => {
            setLoadedImages(prev => new Set([...prev, imageUrl]));
          };
        }
      });
    };
    
    preloadAdjacentImages();
  }, [currentIndex, images, loadedImages]);

  // Handle index changes from props
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    
    if (initialIndex !== currentIndex) {
      setCurrentIndex(initialIndex);
    }
  }, [initialIndex, currentIndex]);

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  // Handle keyboard navigation with passive event listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        handlePrevious();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown, { passive: true });
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrevious, handleNext, onClose]);

  // Handle touch events for mobile
  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;
    
    const handleTouchStart = (e) => {
      touchStartX = e.changedTouches[0].screenX;
    };
    
    const handleTouchEnd = (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    };
    
    const handleSwipe = () => {
      const swipeThreshold = 50;
      if (touchEndX < touchStartX - swipeThreshold) {
        // Swipe left - next image
        handleNext();
      } else if (touchEndX > touchStartX + swipeThreshold) {
        // Swipe right - previous image
        handlePrevious();
      }
    };
    
    const sliderElement = imageRef.current;
    if (sliderElement) {
      sliderElement.addEventListener('touchstart', handleTouchStart, { passive: true });
      sliderElement.addEventListener('touchend', handleTouchEnd, { passive: true });
    }
    
    return () => {
      if (sliderElement) {
        sliderElement.removeEventListener('touchstart', handleTouchStart);
        sliderElement.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [handleNext, handlePrevious]);

  // Memoize the current image to prevent unnecessary re-renders
  const currentImage = useMemo(() => {
    return images[currentIndex];
  }, [images, currentIndex]);

  // Memoize the image counter to prevent unnecessary re-renders
  const imageCounter = useMemo(() => {
    return `${currentIndex + 1} / ${images.length}`;
  }, [currentIndex, images.length]);

  if (isLoading && !loadedImages.has(currentImage)) {
    return (
      <div className="image-slider-overlay">
        <div className="loading-placeholder">
          Loading image...
        </div>
      </div>
    );
  }

  return (
    <div className="image-slider-overlay" onClick={onClose}>
      <div className="image-container" onClick={e => e.stopPropagation()} ref={imageRef}>
        {loadedImages.has(currentImage) ? (
          <Image
            src={currentImage}
            alt={`Image ${currentIndex + 1}`}
            width={1200}
            height={800}
            priority={currentIndex === initialIndex} // Only prioritize the initial image
            quality={75} // Slightly reduce quality for better performance
            loading={currentIndex === initialIndex ? "eager" : "lazy"}
            style={{
              maxWidth: '100%',
              height: 'auto',
              objectFit: 'contain'
            }}
          />
        ) : (
          <div className="loading-placeholder">
            Loading image...
          </div>
        )}
      </div>
      
      <button className="close-button" onClick={onClose} aria-label="Close gallery">×</button>
      <button className="nav-button prev" onClick={handlePrevious} aria-label="Previous image">‹</button>
      <button className="nav-button next" onClick={handleNext} aria-label="Next image">›</button>
      <div className="image-counter">
        {imageCounter}
      </div>
    </div>
  );
};

export default ImageSlider;
