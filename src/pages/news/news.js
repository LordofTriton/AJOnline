import React, { useState } from "react";
import './news.css'

//Services
import { pages } from "../../services/constants";
import ScrollControl from "../../services/scrollControl";
import API from "../../services/api";

const News = ({CortexControl}) => {
    const toggle = CortexControl.currentPage;
    const pageControl = CortexControl.setCurrentPage;
    const setBlogPost = CortexControl.setBlogPost;

    const [blogPostList] = useState(API.getStore("BlogPosts"))

    return(
        <div className="pageContainer" style={{top: toggle <= pages.News ? "0px" : "-100vh"}}>
            <div className="newsContainer" onWheel={(e) => toggle === pages.News ? ScrollControl(e, pageControl, toggle) : null}>
                <h1 className="pageContainerTitle">News</h1>
                {
                    blogPostList.length > 0 ?
                    blogPostList[0].map((post) => 
                        <>
                            <div className="blogEntry" onClick={() => setBlogPost(post)}>
                                <h3 className="blogEntryTitle">{post.Title}</h3>
                                <h3 className="blogEntryInfo">{post.Date}<span>|</span>{post.Category}</h3>
                            </div>
                        </>
                    ) : null
                }
            </div>
        </div>
    )
}

export default News