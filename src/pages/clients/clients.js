import React from "react";
import './clients.css'

//Services
import { pages } from "../../services/constants";
import { useScroll } from "../../hooks/useScroll";

const Clients = ({CortexControl}) => {
    const toggle = CortexControl.currentPage;
    const pageControl = CortexControl.setCurrentPage;

    const { scrollRef } = useScroll(toggle, pageControl);
    
    return(
        <div className="pageContainer" style={{top: toggle <= pages.Clients ? "0px" : "-100vh"}}>
            <div className="clientsContainer" ref={scrollRef}>
                <h1 className="pageContainerTitle"><span>Clients</span> & Partners</h1>

                <h3 className="clientNone">Wow.</h3>
                <h3 className="clientNoneRemark">This page is looking really <i>empty</i>.</h3>
                <h3 className="clientNoneRemark">Let's change that.</h3>
                <h3 className="clientInvite" onClick={() => pageControl(pages.Contact)}>Contact Me</h3>
            </div>
        </div>
    )
}

export default Clients