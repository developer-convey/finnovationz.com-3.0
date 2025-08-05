import React from 'react';
import Blogstyle from '../style/blogdetails.module.css';
import BlogCards from './BlogCards';
function MostRecent(props) {
    return ( 
        <div className='row'>
                    <div className='col-md-12'>
                        <div className={`${Blogstyle.blog_most_recent}` }>More Articles</div>
                        <div className='row'>
                        {props.bloglist.slice(0,4).map((item,index)=>{
                            return(
                                <div className='col-md-6 mt-4' key={index}>
                                <BlogCards  cardData={item}/>
                            </div>
                            )
                          
                        })
                    }
                          
                        </div>
                    </div>
                    </div>

     );
}

export default MostRecent;