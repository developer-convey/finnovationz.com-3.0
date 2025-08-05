import React, { useMemo } from "react";
import Icon from "./Icon";
import { IMAGES } from "../assets/assets";
import useScreenSize from "../hooks/useScreenSize";
import Image from "next/image";

const TestimonialCard = React.memo(({ info, clickCard = () => {} }) => {
  const viewport = useScreenSize();

  if (!info) {
    return null;
  }

  const { id, avatar, name, location, text, stars } = info;
  const quoteW = viewport === "desktop" ? 48 : 40;

  // Memoize the stars array with more efficient calculation
  const starsArr = useMemo(() => {
    const filled = Array(stars).fill("starFilled");
    const outline = Array(5 - stars).fill("starOutline");
    return [...filled, ...outline];
  }, [stars]);

  // Preload first star icon
  const preloadIcons = useMemo(() => {
    return stars > 0 && (
      <link rel="preload" href={IMAGES.starFilled} as="image" />
    );
  }, [stars]);

  return (
    <div
      id={`testimonial-${id}`}
      className="testimonial_card"
      onClick={clickCard}
    >
      {preloadIcons}
      <Icon 
        src={IMAGES.quote} 
        w={quoteW} 
        h={quoteW} 
        loading={viewport === "desktop" ? "eager" : "lazy"}
      />
      <div className="user">
        <div className="avatar">
          <Image
            src={avatar}
            alt={name}
            width={60}
            height={60}
            loading="lazy"
            quality={60} // Reduced quality for small avatar
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSIjZjBmMGYwIi8+PC9zdmc+"
          />
        </div>
        <div className="info">
          <h3>{name}</h3>
          <p>{location}</p>
        </div>
      </div>

      <hr />

      <p>{text}</p>

      <div className="stars">
        {starsArr.map((star, i) => (
          <Icon 
            key={`${id}-star-${i}`} 
            src={IMAGES[star]} 
            w={20} 
            loading={i < 2 ? "eager" : "lazy"} // Eager load first 2 stars
          />
        ))}
      </div>
    </div>
  );
});

TestimonialCard.displayName = 'TestimonialCard';

export default TestimonialCard;