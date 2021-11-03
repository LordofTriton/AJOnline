import React, { useState } from "react";
import './reviews.css'

//Services
import { pages } from "../../services/constants";
import ScrollControl from "../../services/scrollControl";
import API from "../../services/api";

const Reviews = ({CortexControl}) => {
    const toggle = CortexControl.currentPage;
    const pageControl = CortexControl.setCurrentPage;
    const reviewControl = CortexControl.setReviewer;

    const [reviewList] = useState(API.getStore("Reviews"))

    return(
        <div className="pageContainer" style={{top: toggle <= pages.Reviews ? "0px" : "-100vh"}}>
            <div className="reviewsContainer" onWheel={(e) => toggle === pages.Reviews ? ScrollControl(e, pageControl, toggle) : null}>
                <h1 className="pageContainerTitle">Reviews
                    <span className="reviewAddButton" onClick={() => reviewControl(true)}><h3>Leave A Review</h3></span>
                </h1>
                <div className="reviewEntryBox">
                    {
                        reviewList.length > 0 && reviewList[0].length > 0 ?
                        reviewList[0].map((review) => 
                            <div className="reviewEntry">
                                <h3 className="reviewName">{review.Name}</h3>
                                <h3 className="reviewDate">{review.Date}</h3>
                                <pre className="reviewContent">{review.Content}</pre>
                            </div>
                        )
                        :
                        <>
                            <h3 className="reviewNone">Wow.</h3>
                            <h3 className="reviewNoneRemark">This page is looking really <i>empty</i>.</h3>
                            <h3 className="reviewNoneRemark">Let's change that.</h3>
                            <h3 className="reviewInvite"><span onClick={() => reviewControl(true)}>Post A Review</span></h3>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default Reviews