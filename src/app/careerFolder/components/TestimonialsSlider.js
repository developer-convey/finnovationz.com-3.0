import React, { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { IMAGES } from "../assets/assets";
import Icon from "./Icon";
import { SwipeCarousel, px } from "utils-deva";
import useScreenSize from "../hooks/useScreenSize";
import TestimonialCard from "./TestimonialCard";
import { testimonials as slidesData } from "../resources/data.json";
import debounce from "lodash/debounce";

const TestimonialsSlider = () => {
  const viewport = useScreenSize();
  const [swiper, setSwiper] = useState(null);
  const carousalRef = useRef();
  const autoSlideRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const visibilityRef = useRef(true);

  const slides = useMemo(() => {
    const baseSlides = Array(50).fill(slidesData).flat();

    if (viewport === "mobile") {
      const newSlides = [];
      for (let i = 0; i < baseSlides.length; i += 2) {
        const pair = [baseSlides[i], baseSlides[i + 1] || null];
        newSlides.push(pair);
      }
      return newSlides;
    }
    return baseSlides;
  }, [viewport]);

  const [counter, setCounter] = useState(Math.floor(slides.length / 2));
  const dimen = useMemo(() => ({ w: 320, h: 350, sw: 320 * 0.9, g: 20 }), []);

  const nextSlide = useCallback((e) => {
    e?.nativeEvent instanceof PointerEvent && pauseAutoSlider();
    setCounter((prev) => {
      if (prev === slides.length - slidesData.length) return slides.length / 2;
      return Math.min(prev + 1, slides.length - 1);
    });
  }, [slides.length]);

  const prevSlide = useCallback((e) => {
    e?.nativeEvent instanceof PointerEvent && pauseAutoSlider();
    setCounter((prev) => {
      if (prev === slidesData.length) return slides.length / 2;
      return Math.max(prev - 1, 0);
    });
  }, [slides.length]);

  const startAutoSlider = useCallback(() => {
    if (!visibilityRef.current) return;
    clearInterval(autoSlideRef.current);
    autoSlideRef.current = setInterval(nextSlide, 5000);
  }, [nextSlide]);

  const pauseAutoSlider = useCallback(() => {
    clearInterval(autoSlideRef.current);
    autoSlideRef.current = null;
    setTimeout(startAutoSlider, 10000);
  }, [startAutoSlider]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibilityRef.current = entry.isIntersecting;
          if (entry.isIntersecting) {
            startAutoSlider();
          } else {
            clearInterval(autoSlideRef.current);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (carousalRef.current) {
      observer.observe(carousalRef.current);
    }

    return () => {
      observer.disconnect();
      clearInterval(autoSlideRef.current);
    };
  }, [startAutoSlider]);

  useEffect(() => {
    if (carousalRef.current) {
      setSwiper(new SwipeCarousel(carousalRef.current, 80));
      startAutoSlider();

      const debouncedCheck = debounce(() => {
        const rect = carousalRef.current?.getBoundingClientRect();
        if (!rect) return;

        const viewHeight = Math.max(
          document.documentElement.clientHeight,
          window.innerHeight
        );

        if (rect.bottom < 0 || rect.top - viewHeight >= 0) {
          setCounter(Math.floor(slides.length / 2));
        }
      }, 300);

      window.addEventListener("scroll", debouncedCheck);
      return () => window.removeEventListener("scroll", debouncedCheck);
    }
  }, [slides.length, startAutoSlider]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const renderSlides = useMemo(() => {
    return slides.map((slide, i) => {
      const offset =
        (i - counter) * (dimen.sw + dimen.g) +
        (i - counter > 0 ? dimen.w * 0.1 : 0);

      return (
        <div
          key={`slide-${i}`}
          className={`slide ${i - counter < 0 ? "back" : ""} ${
            i - counter === 0 ? "active" : ""
          } ${i - counter > 0 ? "ahead" : ""}`}
          style={{
            "--offset": px(offset),
            "--at": Math.abs(i - counter),
            willChange: "transform",
          }}
        >
          {Array.isArray(slide) ? (
            <>
              <TestimonialCard info={slide[0]} clickCard={() => setCounter(i)} />
              {slide[1] && (
                <TestimonialCard info={slide[1]} clickCard={() => setCounter(i)} />
              )}
            </>
          ) : (
            <TestimonialCard info={slide} clickCard={() => setCounter(i)} />
          )}
        </div>
      );
    });
  }, [slides, counter, dimen]);

  if (!isLoaded) {
    return (
      <div className="carousal" ref={carousalRef}>
        <div
          className="slider"
          style={{
            "--w": px(dimen.w),
            "--h": px(dimen.h),
            "--gap": px(dimen.g),
          }}
        >
          <div className="slide active" style={{ "--offset": "0px", "--at": "0" }}>
            <div
              style={{
                width: "100%",
                height: "100%",
                background: "#f0f0f0",
                willChange: "transform",
              }}
            ></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="carousal" ref={carousalRef}>
      <div
        className="slider"
        style={{
          "--w": px(dimen.w),
          "--sw": px(dimen.sw),
          "--h": px(dimen.h),
          "--gap": px(dimen.g),
          height: viewport === "mobile" ? `${2 * dimen.h + 20}px` : px(dimen.h),
        }}
      >
        {renderSlides}
      </div>

      <div className="controls">
        <button onClick={prevSlide} aria-label="Previous slide">
          <Icon src={IMAGES.arrowBack} loading="eager" />
        </button>
        <div className="index">
          {slidesData.map((_, i) => (
            <span
              key={`dot-${i}`}
              className={i === counter % slidesData.length ? "active" : ""}
            />
          ))}
        </div>
        <button onClick={nextSlide} aria-label="Next Slide">
          <Icon src={IMAGES.arrowNext} loading="eager" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialsSlider;