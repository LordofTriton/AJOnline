import React from "react";
import './clients.css'

//Services
import { pages } from "../../services/constants";

const Clients = ({CortexControl}) => {
    const toggle = CortexControl.currentPage;
    const pageControl = CortexControl.setCurrentPage;
    
    return(
        <div className="pageContainer" style={{top: toggle <= pages.Clients ? "0px" : "-100vh"}}>
            <div className="clientsContainer">
                <h1 className="pageContainerTitle"><span>Clients</span> & Partners</h1>

                <h3 className="clientNone">Wow.</h3>
                <h3 className="clientNoneRemark">This page is looking really <i>empty</i>.</h3>
                <h3 className="clientNoneRemark">Let's change that.</h3>
                <h3 className="clientInvite"><span onClick={() => pageControl(pages.Contact)}>Contact Me</span></h3>
            </div>
        </div>
    )
}

export default Clients