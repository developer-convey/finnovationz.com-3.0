import React from "react";
import { useRouter } from "next/navigation";
import '../styles/webstory_card.css';
import { MdWebStories } from "react-icons/md";
import Image from "next/image";

function WebStoryCards({ cardData }) {
  const { slug, title, date, featuredImage, content } = cardData;
  const router = useRouter();

  function formatDate(dateString) {
    const options = { day: "numeric", month: "long", year: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  }

  const handlewebstoryClick = () => {
    sessionStorage.setItem("webStoryContent", JSON.stringify(content));
    router.push(`/web-stories/${slug}`); 
  };

  return (
    <div className="main-webstories cursor-pointer">
      <div className="webstories-item" onClick={handlewebstoryClick}>
        <div className="iconofwebstoires">
          <MdWebStories size={30} color="white" />
        </div>
        <Image src={featuredImage} alt={title} layout="fill" objectFit="cover" className="cursor-pointer" />
        <div className="gradient">
          <h3>{title}</h3>
          <div className="time">{formatDate(date)}</div>
        </div>
      </div>
    </div>
  );
}

export default WebStoryCards;
