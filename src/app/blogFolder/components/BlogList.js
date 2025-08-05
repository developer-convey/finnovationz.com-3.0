"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import Style from "../style/home.module.css";
import BlogCards from "./BlogCards";
import Dropdown from "react-bootstrap/Dropdown";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "./newbloglist.css";

function BlogList() {
  const [categories, setCategories] = useState(["All"]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [blogList, setBlogList] = useState([]);
  const [filteredBlogList, setFilteredBlogList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("date");
  const itemsPerPage = 9;
  const blogListRef = useRef(null);

  // Fetch all blogs
  const fetchAllBlogs = useCallback(async () => {
    try {
      let url = `${process.env.NEXT_PUBLIC_BLOG_API_URL}/api/blogs/list/user?page=1&limit=${Number.MAX_SAFE_INTEGER}`;
      if (searchKeyword) url += `&search=${searchKeyword}`;
      const response = await fetch(url);
      const result = await response.json();

      if (response.ok) {
        const blogs = result.responseData.data;
        setBlogList(blogs);

        const categorySet = new Set(blogs.map(blog => blog.category?.categoryTitle).filter(Boolean));
        setCategories(["All", ...Array.from(categorySet)]);
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  }, [searchKeyword]);

  useEffect(() => {
    fetchAllBlogs();
  }, [fetchAllBlogs]);

  // Filtering and sorting
  useEffect(() => {
    let filtered = blogList.filter(blog =>
      selectedCategory === "All" || blog.category?.categoryTitle === selectedCategory
    );

    if (sortOrder === "date") {
      filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else if (sortOrder === "asc") {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOrder === "desc") {
      filtered.sort((a, b) => b.title.localeCompare(a.title));
    }

    setFilteredBlogList(filtered);
    setCurrentPage(1); // Reset page on filter/sort
  }, [blogList, selectedCategory, sortOrder]);

  const handleSort = (order) => {
    setSortOrder(order);
  };

  const handleSearchChange = (e) => {
    setSearchKeyword(e.target.value);
    setCurrentPage(1);
  };

  const currentData = filteredBlogList.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const totalPages = Math.ceil(filteredBlogList.length / itemsPerPage);

  const onPageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <section className={Style.blog_list} ref={blogListRef}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="d-flex align-items-center justify-content-between">
              <div className={`${Style.searchField} form-group d-flex align-items-center`}>
                <input
                  type="text"
                  placeholder="Search by keywords"
                  value={searchKeyword}
                  onChange={handleSearchChange}
                />
                <button className="bg-transparent">
                  <img src="/search.svg" alt="Search" />
                </button>
              </div>

              <Dropdown>
                <Dropdown.Toggle className={`${Style.FilterButton} d-flex align-items-center`} id="dropdown-basic">
                  <img src="/sort.svg" alt="Sort" className="me-2" />
                  <span className="d-none d-md-inline-block me-2">Sort By</span>
                  <img src="/dropdown-icon.svg" alt="Dropdown" className="d-none d-md-inline-block" />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => handleSort("date")}>
                    <input type="radio" checked={sortOrder === "date"} readOnly className="me-2" /> Most Recent
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleSort("asc")}>
                    <input type="radio" checked={sortOrder === "asc"} readOnly className="me-2" /> A to Z
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleSort("desc")}>
                    <input type="radio" checked={sortOrder === "desc"} readOnly className="me-2" /> Z to A
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>

          <div className="col-md-12 mt-3">
            <ul className="d-flex justify-content-center gap-4 category-list flex-wrap">
              {categories.map((category, index) => (
                <li
                  key={index}
                  className={`category-item border-custom ${selectedCategory === category ? "active" : ""}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </li>
              ))}
            </ul>

            <div className="row mt-3">
              {currentData.map((blog, index) => (
                <div className="col-lg-4 col-sm-6 mt-3" key={index}>
                  <BlogCards cardData={blog} />
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="pagination justify-center mt-5">
              <button
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
                className="prev_btn pagination_btn"
              >
                <LeftOutlined />
              </button>
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  className={`pagination-button ${i + 1 === currentPage ? "active" : ""}`}
                  onClick={() => onPageChange(i + 1)}
                >
                  {i + 1}
                </button>
              ))}
              <button
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
                className="next_btn pagination_btn"
              >
                <RightOutlined />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogList;