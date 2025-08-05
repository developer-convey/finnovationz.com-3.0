import React, { useState, useEffect } from 'react';
import Blogstyle from '../style/blogdetails.module.css';

function BlogDetailLeft(props) {
  const [htmlContent, setHtmlContent] = useState(props.bloglistSingle.content);

  useEffect(() => {
    const tempElement = document.createElement('div');
    tempElement.innerHTML = props.bloglistSingle.content;

    const convRegex = /C0nv€¥<a[^>]+href="(https:\/\/youtu\.be\/[^\s"]+)[^>]*>.*?<\/a>/g;

    tempElement.innerHTML = tempElement.innerHTML.replace(convRegex, (match, url) => {

      const videoId = url.split('/').pop().split('?')[0];
    
      return `
        <figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio" style="width: 100%; margin: 0;">
          <div class="wp-block-embed__wrapper" style="width: 100%;">
            <div class="ast-oembed-container" style="width: 100%; height: auto; aspect-ratio: 16/9;">
              <iframe loading="lazy" 
                width="100%" height="100%"
                src="https://www.youtube.com/embed/${videoId}?rel=0&playlist=${videoId}" 
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen
                style="width: 100%; height: 100%; display: block;">
              </iframe>
            </div>
          </div>
        </figure>
      `;
    });    

      setHtmlContent(tempElement.innerHTML);
  }, [props.bloglistSingle.content]);

  return (
    <>
      <div className={`${Blogstyle.blog_text_img}`}>
        <img src={props.bloglistSingle.imageUrl} width="100%" alt="finnovation" />
        {/* <div className={`${Blogstyle.bottom_left} d-flex align-items-center`}>
          <img src="/ceo_img.svg" alt="" />
          <div className="ms-2">
            <div className={`${Blogstyle.ceo_name}`}>Namaskar Prasad</div>
            <div className="text-18 text-light">Founder of FinnovationZ</div>
          </div>
        </div> */}
      </div>
      <h1 className="pt-3">{props.bloglistSingle.title}</h1>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} className={Blogstyle.BlogContent}></div>
    </>
  );
}

export default BlogDetailLeft;
