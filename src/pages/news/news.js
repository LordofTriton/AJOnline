import React, { useState, useEffect } from "react";
import './news.css'
import axios from "axios";

//Services
import { pages } from "../../services/constants";

const News = ({CortexControl}) => {
    const toggle = CortexControl.currentPage;
    const setBlogPost = CortexControl.setBlogPost;
    const [blogPostList, setBlogPostList] = useState([])

    useEffect(() => {
        axios.get("https://tritonserver.herokuapp.com/portfolio/getBlogPosts").then(re => {
            setBlogPostList(re.data)
        })
    }, [CortexControl])

    return(
        <div className="pageContainer" style={{top: toggle <= pages.News ? "0px" : "-100vh"}}>
            <div className="newsContainer">
                <h1 className="pageContainerTitle">News</h1>
                {
                    blogPostList.length > 0 ?
                    blogPostList.map((post) => 
                        <>
                            <div className="blogEntry" onClick={() => setBlogPost(post)}>
                                <h3 className="blogEntryTitle">{post.title}</h3>
                                <h3 className="blogEntryInfo">{post.date}<span>|</span>{post.category}</h3>
                            </div>
                        </>
                    ) : null
                }
            </div>
        </div>
    )
}

export default News