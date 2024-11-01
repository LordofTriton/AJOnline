import React, { useState, useEffect } from "react";
import './news.css'
import axios from "axios";

//Services
import { pages } from "../../services/constants";
import { useScroll } from "../../hooks/useScroll";

const News = ({CortexControl}) => {
    const toggle = CortexControl.currentPage;
    const pageControl = CortexControl.setCurrentPage;

    const { scrollRef } = useScroll(toggle, pageControl);

    const setBlogPost = CortexControl.setBlogPost;
    const [blogPostList, setBlogPostList] = useState([])

    useEffect(() => {
        axios.get(`${CortexControl.BaseAPI}/portfolio/getBlogPosts`).then(re => {
            setBlogPostList(re.data)
        })
    }, [CortexControl])

    return(
        <div className="pageContainer" style={{top: toggle <= pages.News ? "0px" : "-100vh"}}>
            <div className="newsContainer" ref={scrollRef}>
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