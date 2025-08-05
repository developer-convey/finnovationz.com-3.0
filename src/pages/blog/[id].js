import React, { useState, useEffect } from "react";
import Blogstyle from "../../app/blogFolder/style/blogdetails.module.css";
import "../../app/blogFolder/style/blog.css";
import { Helmet } from "react-helmet";
import { useRouter } from "next/router";
import BlogDetailLeft from "@/app/blogFolder/components/BlogDetailLeft";
import BlogSidebar from "@/app/blogFolder/components/BlogSidebar";
import SocialShareIcons from "@/app/blogFolder/components/SocialShareIcons";
import dynamic from "next/dynamic";
import Header from "@/app/blogFolder/components/Header";
import Footer from "@/app/components/brokerFooter";

const MostRecent = dynamic(
  () => import("@/app/blogFolder/components/MostRecent"),
  {
    ssr: false,
    loading: () => <p> </p>,
  }
);
const Newsletter = dynamic(
  () => import("@/app/blogFolder/components/Newsletter"),
  {
    ssr: false,
    loading: () => <p> </p>,
  }
);

function Singleblog(props) {
  const router = useRouter();
  const { id } = router.query;

  // const [searchParams, setSearchParams] = useState(null);
  const [Singledata, setSingledata] = useState("");
  const [dataValue, setDataValue] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dataURL] = useState(id);
  useEffect(() => {
    // Function to fetch data when the component mounts
    const fetchDataBlog = async () => {
      try {
        const responseSingle = await fetch(
          `${process.env.NEXT_PUBLIC_BLOG_API_URL}/api/blogs/user/${id}`
        );
        if (responseSingle.status === 200) {
          const SingleResult = await responseSingle.json();
          setSingledata(SingleResult);
        } else {
          return { notFound: true }; // redirect to 404 page
        }
      } catch (error) {
        setSingledata("");
      } finally {
        setIsLoading(false);
      }
    };
    // Call the fetchData function
    fetchDataBlog();
  }, [id]); // Empty dependency array ensures this effect runs only once, similar to componentDidMount

  useEffect(() => {
    // Function to fetch data when the component mounts
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BLOG_API_URL}/api/blogs/list/user?page=1&limit=10`
        );
        if (response.status === 200) {
          const result = await response.json();
          const blogsMain = result.responseData.data;

          setDataValue(blogsMain);
        } else {
          return { notFound: true }; // redirect to 404 page
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []); // Empty dependency array ensures this effect runs only once, similar to componentDidMount
  const filterValue = dataValue.filter(
    (blog) => blog._id !== Singledata?.responseData?._id
  );

  if (isLoading) {
    return <div className="loading-active">Loading...</div>; // You can render a loading indicator
  }

  if (error) {
    return <div>Error: {error.message}</div>; // Display an error message if fetching fails
  }

  return (
    <>
      {Singledata.responseData !== undefined || Singledata !== "" ? (
        <>
          <Helmet>
            <title>{Singledata.responseData.metaTitle}</title>
            <meta
              name="description"
              content={Singledata.responseData.metaDescription}
            />
            <meta
              name="keywords"
              content={Singledata.responseData.metaKeywords}
            />
          </Helmet>
          <Header />

          <section className={`${Blogstyle.blog_details_banner} blog_content`}>
            <div className={`${Blogstyle.custom_container} container`}>
              {/* <h2>{id}</h2> */}
              <div className="row justify-content-center">
                <div className="col-md-12 col-xl-8 pe-xl-5">
                  <BlogDetailLeft
                    bloglistSingle={Singledata?.responseData || []}
                  />
                  <MostRecent bloglist={filterValue || []} />
                </div>
                <div className="col-md-12 col-xl-4">
                  <div style={{ position: "sticky", top: -392 }}>
                    <BlogSidebar />
                  </div>
                </div>
              </div>
            </div>
            <SocialShareIcons shareURL={dataURL || []} />
          </section>
        </>
      ) : (
        <section className={`${Blogstyle.blog_details_banner} text-center`}>
          <h1>Data Not Found</h1>
        </section>
      )}
      <Newsletter />
      <Footer/>
    </>
  );
}

export default Singleblog;
