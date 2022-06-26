import React, { useEffect, useState } from "react";
import './reviews.css'
import axios from "axios";

//Services
import { pages } from "../../services/constants";

const Reviews = ({CortexControl}) => {
    const toggle = CortexControl.currentPage;
    const reviewControl = CortexControl.setReviewer;
    const [reviewList, setReviewList] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/portfolio/getReviews").then(re => {
            setReviewList(re.data)
        })
    }, [CortexControl])

    return(
        <div className="pageContainer" style={{top: toggle <= pages.Reviews ? "0px" : "-100vh"}}>
            <div className="reviewsContainer">
                <h1 className="pageContainerTitle">Reviews</h1>
                <div className="reviewEntryBox">
                    {
                        reviewList.length > 0 ?
                        reviewList.map((review) => 
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
                            <h3 className="reviewInvite" onClick={() => reviewControl(true)}>Leave A Review</h3>
                        </>
                    }
                </div>
                
                {reviewList.length > 0 ? <span className="reviewAddButton" onClick={() => reviewControl(true)}><h3>Leave Your Review</h3></span> : null}
            </div>
        </div>
    )
}

export default Reviews