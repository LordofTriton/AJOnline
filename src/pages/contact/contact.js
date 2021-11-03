import React, { useState } from "react";
import './contact.css'

//Services
import { pages } from "../../services/constants";
import ScrollControl from "../../services/scrollControl";
import SVGServer from "../../services/svgServer";
import API from "../../services/api";
import DateTime from "../../services/dateTime";

const defaultMessage = {
    id: 0,
    Name: "",
    Email: "",
    Subject: "",
    Content: "",
    Date: ""
}

const Contact = ({CortexControl}) => {
    const toggle = CortexControl.currentPage;
    const pageControl = CortexControl.setCurrentPage;

    const [messages] = useState(API.getStore("Messages"))
    const [newMessage, setNewMessage] = useState(defaultMessage)

    const handleSubmit = (event) => {
        event.preventDefault()

        const userMessage = {...newMessage, id: messages.length + 1, Date: DateTime.getDateFormatOne()}
        API.addStoreItem("Messages", userMessage)
        setNewMessage(defaultMessage)
    }

    return(
        <div className="pageContainer" style={{top: toggle <= pages.Contact ? "0px" : "-100vh"}}>
            <div className="contactContainer" onWheel={(e) => toggle === pages.Contact ? ScrollControl(e, pageControl, toggle) : null}>
                <h1 className="pageContainerTitle">Contact Me</h1>
                
                <div className="contactInfoBox">
                    <h3 className="contactInfoTitle"><span>Lagos</span>, Nigeria.</h3>
                    <h3 className="contactInfoAddr">11 Folarin Gbadebo Street, Ojokoro.</h3>

                    <h3 className="contactInfoEmail">
                        <span><SVGServer.Email color="white" width="50px" height="50px" /></span>
                        agboola918@gmail.com
                    </h3>
                    <h3 className="contactInfoPhone">
                        <span><SVGServer.Phone color="white" width="50px" height="50px" /></span>
                        +234 7065194708
                    </h3>
                </div>
                <div className="messageBox">
                    <form onSubmit={handleSubmit}>
                        <input className="messageBoxField" placeholder="Name" type="text" style={{width: "47.5%", marginRight: "5%"}} value={newMessage.Name} onChange={(e) => setNewMessage({...newMessage, Name: e.target.value})} />

                        <input className="messageBoxField" placeholder="Email" type="email" style={{width: "47.5%"}} value={newMessage.Email} onChange={(e) => setNewMessage({...newMessage, Email: e.target.value})} />

                        <input className="messageBoxField" placeholder="Subject (Optional)" type="text" style={{width: "100%"}} value={newMessage.Subject} onChange={(e) => setNewMessage({...newMessage, Subject: e.target.value})} />

                        <textarea className="messageBoxField" placeholder="Message" type="text" style={{width: "100%", paddingTop: "15px", height: "200px"}} value={newMessage.Content} onChange={(e) => setNewMessage({...newMessage, Content: e.target.value})} />

                        <input className="messageBoxSubmit" type="submit" value="Contact Me" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact