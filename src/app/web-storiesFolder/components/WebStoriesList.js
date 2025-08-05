import React, { useState, useEffect, useRef } from "react";
import Style from "../styles/home.module.css";
import WebStoryCards from "./WebStoriesCards";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import WebStoriesTitle from "./WebStoriesTitle";
import { GET_ALL_WEB_STORIES } from './getAllWebStories';
import WPClient from "../../services/apoloclient";
import { Loader } from "lucide-react";
import Spinner from '../../components/spinner'

function WebStoriesList() {
  const [storyList, setStoryList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 9;
  const webstoryListRef = useRef(null);
  const [stories, setStories] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const defaultImageUrl = "/web-stories-no-image.jpg";

  const fetchStories = async () => {
    setLoading(true);
    try {
      const { data } = await WPClient.query({
        query: GET_ALL_WEB_STORIES,
      });

      const formattedStories = data.webStories.nodes.map((story) => ({
        title: story.title,
        slug: story.slug,
        date: story.date,
        featuredImage: story.featuredImage?.node?.mediaItemUrl || defaultImageUrl,
        content: story.content,
        link: `${process.env.NEXT_PUBLIC_WEBSTORIES_API_URL}web-stories/${story.slug}/`,
      }));

      setStories(formattedStories);
      setTotalPages(Math.ceil(formattedStories.length / itemsPerPage)); // Set total pages
    } catch (error) {
      console.error("Error fetching stories:", error);
      setError("Failed to load stories. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStories();
  }, []);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setStoryList(stories.slice(startIndex, endIndex));
  }, [stories, currentPage]);

  const onPageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const renderPagination = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          className={`pagination-button ${i === currentPage ? "active" : ""}`}
          onClick={() => onPageChange(i)}
        >
          {i}
        </button>
      );
    }

    return (
      <div className="pagination justify-center mt-5">
        <button
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className="prev_btn pagination_btn"
        >
          <LeftOutlined />
        </button>
        {pages}
        <button
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className="next_btn pagination_btn"
        >
          <RightOutlined />
        </button>
      </div>
    );
  };

  return (
    <section className={`${Style.webstory_banner}`} ref={webstoryListRef}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 mt-2">
            <WebStoriesTitle />
            {error && <div className="error-message">{error}</div>}
            {loading ? (
              <Spinner />
            ) : (
              <div className="row mt-3">
                {storyList.map((story, index) => (
                  <div className="col-lg-4 col-sm-6 mt-3" key={index}>
                    <WebStoryCards cardData={story} />
                  </div>
                ))}
              </div>
            )}
            {renderPagination()}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WebStoriesList;
