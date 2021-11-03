import React from "react";
import './sideNav.css'

//Service
import SVGServer from "../../../services/svgServer";

const navLinks = [
    "Home",
    "My Specializations",
    "Proficiency",
    "My Projects",
    "Clients & Partners",
    "Reviews",
    "News",
    "Contact Me"
]

const SideNav = ({CortexControl}) => {
    const toggle = CortexControl.navMode;
    const control = CortexControl.setNavMode;
    const pageIndex = CortexControl.currentPage;
    const pageControl = CortexControl.setCurrentPage;
    
    return(
        <>
            <div className="dimmer" style={{display: toggle ? "block" : "none"}} onClick={() => control(false)}></div>
            <div className="sideNavContainer" style={{right: toggle ? "0px" : "-100vw"}}>
                <h3 className="sideNavContainerCancel" onClick={() => control(false)}>&#x2573;</h3>
                {
                    navLinks.map((link, index) => 
                        index !== 5 && index !== 6 ?
                        <div className="sideNavButton"
                            style={{borderColor: pageIndex === index ? "var(--orange-peel)" : null}}
                            onClick={() => {pageControl(index); control(false)}}>
                            <h3>{link}</h3>
                        </div>
                        : null
                    )
                }
                <div style={{margin: "70px 10% 20px 0px"}}>
                    <div className="mediaIcons" onClick={() => document.location = "https://github.com/LordofTriton"}>
                        <SVGServer.Github color="#FFFFFF" width="100%" height="100%" />
                    </div>
                    <div className="mediaIcons">
                        <SVGServer.LinkedIn color="#FFFFFF" width="100%" height="100%" />
                    </div>
                    <div className="mediaIcons">
                        <SVGServer.Gmail color="#FFFFFF" width="100%" height="100%" />
                    </div>
                    <div className="mediaIcons">
                        <SVGServer.FaceBook color="#FFFFFF" width="100%" height="100%" />
                    </div>
                    <div className="mediaIcons">
                        <SVGServer.Twitter color="#FFFFFF" width="100%" height="100%" />
                    </div>
                </div>
                <h3 className="sideNavRights">&copy; AJ 2020. All rights reserved.</h3>
            </div>
        </>
    )
}

export default SideNav;