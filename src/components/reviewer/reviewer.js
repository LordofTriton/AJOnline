import React, { useState } from "react";
import './reviewer.css'
import axios from "axios";

//Services
import DateTime from "../../services/dateTime";

const defaultReview = {
    id: 0,
    Name: "",
    Email: "",
    Title: "",
    Content: "",
    Date: ""
}

const Reviewer = ({CortexControl}) => {
    const toggle = CortexControl.reviewer;
    const control = CortexControl.setReviewer;

    const [newReview, setNewReview] = useState(defaultReview)

    const handleSubmit = (e) => {
        e.preventDefault()

        const userReview = {...newReview, Date: DateTime.getDateFormatOne()}
        axios.post("https://tritonserver.herokuapp.com/portfolio/addReview", {newReview: userReview})
        setNewReview(defaultReview)
        control(false)
    }

    return(
        <>
            <div className="dimmer" style={{display: toggle ? "block" : "none"}} onClick={() => control(false)}></div>
            <div className="reviewerContainer" style={{left: toggle ? "50%" : "-100vw"}}>
                <h3 className="reviewerContainerTitle">Leave A <span>Review</span></h3>
                <h3 className="reviewerContainerCancel" onClick={() => control(false)}>&#x2573;</h3>

                <div className="reviewForm">
                    <form onSubmit={handleSubmit}>
                        <input className="reviewFormField" placeholder="Name" type="text" style={{width: "47.5%", marginRight: "5%"}} value={newReview.Name} onChange={(e) => setNewReview({...newReview, Name: e.target.value})} />

                        <input className="reviewFormField" placeholder="Email" type="email" style={{width: "47.5%"}} value={newReview.Email} onChange={(e) => setNewReview({...newReview, Email: e.target.value})} />

                        <input className="reviewFormField" placeholder="Title (Optional)" type="text" style={{width: "100%"}} value={newReview.Title} onChange={(e) => setNewReview({...newReview, Title: e.target.value})} />

                        <textarea className="reviewFormField" placeholder="Message" type="text" style={{width: "100%", paddingTop: "15px", height: "200px"}} value={newReview.Content} onChange={(e) => setNewReview({...newReview, Content: e.target.value})} />

                        <input className="reviewFormSubmit" type="submit" value="Send" />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Reviewer;