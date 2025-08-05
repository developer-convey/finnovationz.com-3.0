/* eslint-disable eqeqeq */
import React, { useEffect, useRef, useState, useCallback, useMemo } from "react";
import Icon from "./Icon";
import { SwipeCarousel, px } from "utils-deva";
import useScreenSize from "../hooks/useScreenSize";
import debounce from "lodash/debounce";
import { IMAGES } from "../assets/assets";
import Image from "next/image";

// Reduce initial load by limiting the number of images and using webp format
const originalSlides = [
  "/careerSlider1.webp",
  "/careerSlider2.webp",
  "/careerSlider3.webp",
  "/careerSlider4.webp",
  "/careerSlider5.webp",
  "/careerSlider6.webp",
  "/careerSlider7.webp",
  "/careerSlider8.webp",
  "/careerSlider9.webp",
  "https://api-ap-south-mum-1.openstack.acecloudhosting.com:8080/websitevideos2020/images/13-01-2025/Screenshot%202025-01-13%20170520.png",
  "https://api-ap-south-mum-1.openstack.acecloudhosting.com:8080/websitevideos2020/images/13-01-2025/Screenshot%202025-01-13%20170705.png",
  "https://api-ap-south-mum-1.openstack.acecloudhosting.com:8080/websitevideos2020/images/13-01-2025/WhatsApp%20Image%202025-01-13%20at%2019.07.46_b8390428.jpg",
  "https://api-ap-south-mum-1.openstack.acecloudhosting.com:8080/websitevideos2020/images/13-01-2025/WhatsApp%20Image%202025-01-13%20at%2019.07.49_5a508d48.jpg",
  "https://api-ap-south-mum-1.openstack.acecloudhosting.com:8080/websitevideos2020/images/13-01-2025/WhatsApp%20Image%202025-01-13%20at%2019.07.49_62ea13f0.jpg",
  "https://api-ap-south-mum-1.openstack.acecloudhosting.com:8080/websitevideos2020/images/13-01-2025/WhatsApp%20Image%202025-01-13%20at%2019.07.49_924be1dd.jpg"
];

const HeroCarousal = () => {
  const viewport = useScreenSize();
  const carousalRef = useRef();
  const swiper = useRef(null);
  const autoSlideRef = useRef(null);
  const [dimen] = useState({ w: 320, h: 470, g: 20 });
  const [slides, setSlides] = useState([]);
  const [counter, setCounter] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);
  const [preloadedImages, setPreloadedImages] = useState(new Set());

  // Memoize the cloned slides to prevent unnecessary recalculations
  const clonedSlides = useMemo(() => [
    { id: -1, img: originalSlides[originalSlides.length - 1] },
    ...originalSlides.map((img, i) => ({ id: i + 1, img })),
    { id: -2, img: originalSlides[0] }
  ], []);

  // Preload images with priority
  useEffect(() => {
    const preloadImage = async (src) => {
      if (preloadedImages.has(src)) return;
      
      try {
        await new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = () => {
            setPreloadedImages(prev => new Set([...prev, src]));
            resolve();
          };
          img.onerror = reject;
        });
      } catch (error) {
        console.error('Error preloading image:', error);
      }
    };

    // Preload current and adjacent images
    const currentIndex = counter;
    const preloadImages = async () => {
      const currentImage = clonedSlides[currentIndex]?.img;
      const nextImage = clonedSlides[currentIndex + 1]?.img;
      const prevImage = clonedSlides[currentIndex - 1]?.img;

      if (currentImage) await preloadImage(currentImage);
      if (nextImage) await preloadImage(nextImage);
      if (prevImage) await preloadImage(prevImage);
    };

    preloadImages();
  }, [counter, clonedSlides, preloadedImages]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSlides(clonedSlides);
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, [clonedSlides]);

  const jumpTo = useCallback((index) => {
    setCounter(index);
  }, []);

  const nextSlide = useCallback(() => {
    setCounter(prev => prev + 1);
  }, []);

  const prevSlide = useCallback(() => {
    setCounter(prev => prev - 1);
  }, []);

  const startAutoSlide = useCallback(() => {
    autoSlideRef.current = setInterval(() => {
      setCounter(prev => prev + 1);
    }, 5000);
  }, []);

  const pauseAutoSlide = useCallback(() => {
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
      autoSlideRef.current = null;
    }
    setTimeout(() => {
      if (!autoSlideRef.current) startAutoSlide();
    }, 3000);
  }, [startAutoSlide]);

  const handleInteraction = useCallback((e) => {
    if (e?.nativeEvent instanceof PointerEvent) pauseAutoSlide();
  }, [pauseAutoSlide]);

  const resetIfHidden = useCallback(() => {
    const rect = carousalRef.current?.getBoundingClientRect();
    const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    const counterValue = +getComputedStyle(
      document.querySelector(".hero_carousal .slider")?.lastChild
    )?.getPropertyValue("--at") || 0;

    return (
      (rect.bottom < 0 || rect.top - viewHeight >= 0) &&
      (counterValue < 100 || counterValue >= slides.length - slides.length)
    );
  }, [slides.length]);

  useEffect(() => {
    if (viewport === "mobile") {
      setCounter(1);
    }
  }, [viewport]);

  useEffect(() => {
    if (carousalRef.current && isLoaded) {
      swiper.current = new SwipeCarousel(carousalRef.current, 80);
      swiper.current.onSwipeLeft = () => {
        pauseAutoSlide();
        nextSlide();
      };
      swiper.current.onSwipeRight = () => {
        pauseAutoSlide();
        prevSlide();
      };

      startAutoSlide();

      // Add scroll event listener to pause autoplay
      const handleScroll = () => {
        clearInterval(autoSlideRef.current);
      };

      window.addEventListener('scroll', handleScroll, { passive: true });

      const debouncedMouseMove = debounce(() => {
        if (resetIfHidden()) {
          setCounter(1);
        }
      }, 200);

      document.addEventListener("mousemove", debouncedMouseMove);

      return () => {
        clearInterval(autoSlideRef.current);
        document.removeEventListener("mousemove", debouncedMouseMove);
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [nextSlide, prevSlide, pauseAutoSlide, resetIfHidden, startAutoSlide, isLoaded]);

  useEffect(() => {
    if (counter === slides.length - 1) {
      setTimeout(() => setCounter(1), 50);
    } else if (counter === 0) {
      setTimeout(() => setCounter(slides.length - 2), 50);
    }
  }, [counter, slides.length]);

  if (!isLoaded) {
    return (
      <div className="carousal hero_carousal" ref={carousalRef}>
        <div className="slider" style={{ "--w": px(dimen.w), "--h": px(dimen.h), "--gap": px(dimen.g) }}>
          <div className="slide active" style={{ "--offset": "0px", "--at": "0" }}>
            <div style={{ width: "100%", height: "100%", background: "#f0f0f0" }}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="carousal hero_carousal" ref={carousalRef}>
      <div
        className="slider"
        style={{
          "--w": px(dimen.w),
          "--h": px(dimen.h),
          "--gap": px(dimen.g),
        }}
      >
        {slides.map(({ id, img }, i) => {
          const isOff = i - counter < 0;
          const active = i === counter ? "active" : "";
          const offset =
            (i - counter) * dimen.w +
            1.5 * dimen.g +
            (i - counter) * (!isOff ? dimen.g : -dimen.g / 2);

          return (
            <div
              key={i}
              id={`slide-${id}`}
              className={`slide ${isOff ? "back" : ""} ${active}`}
              style={{
                ...(viewport == "mobile"
                  ? { "--offset": px(offset) }
                  : { "--offset": px(!isOff ? offset : 0) }),
                "--at": Math.abs(i - counter),
              }}
            >
              <Image 
                src={img} 
                alt={`slide-${i}`} 
                loading={i === counter ? "eager" : "lazy"}
                width={dimen.w}
                height={dimen.h}
                quality={75}
                priority={i === counter}
                style={{ objectFit: "cover" }}
              />
            </div>
          );
        })}
      </div>
      <div className="controls">
        <button onClick={(e) => { handleInteraction(e); prevSlide(); }}>
          <Icon src={IMAGES.arrowBack} />
        </button>
        <div className="index">
          <span></span>
          <span className="active"></span>
          <span></span>
        </div>
        <button onClick={(e) => { handleInteraction(e); nextSlide(); }}>
          <Icon src={IMAGES.arrowNext} />
        </button>
      </div>
    </div>
  );
};

export default HeroCarousal;
