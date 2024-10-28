import React from "react";
import './capabilities.css'

//Services
import { pages } from "../../services/constants";
import { useScroll } from "../../hooks/useScroll";

const Capabilities = ({CortexControl}) => {
    const toggle = CortexControl.currentPage;
    const pageControl = CortexControl.setCurrentPage;

    const { scrollRef } = useScroll(toggle, pageControl);
    
    return(
        <div className="pageContainer" style={{top: toggle <= pages.Capabilities ? "0px" : "-100vh"}}>
            <div id="page" className="capabilitiesContainer" ref={scrollRef}>
                {/* <h1 className="pageContainerTitle"><span>My</span> Skills</h1> */}

                <div className="expBox">
                    <h3 className="expNum">6</h3>
                    <h3 className="expText">Years Coding Experience</h3>
                    <hr style={{width: "50%", margin: "0px 25% 0px 25%", transform: "translate(0px, 20px)"}} />
                </div>
                <div className="proBox">
                    <h3 className="proBoxTitle">Proficiency</h3>
                    <h3 className="proBoxText">These are the results of my training and hard work. :)</h3>

                    <h3 className="proBoxInfo">HTML<span>99%</span></h3>
                    <div className="proBoxBar">
                        <div className="proBoxProgress" style={{width: "99%"}}></div>
                    </div>
                    <h3 className="proBoxInfo">CSS<span>99%</span></h3>
                    <div className="proBoxBar">
                        <div className="proBoxProgress" style={{width: "99%"}}></div>
                    </div>
                    <h3 className="proBoxInfo">JavaScript (ES6)<span>90%</span></h3>
                    <div className="proBoxBar">
                        <div className="proBoxProgress" style={{width: "90%"}}></div>
                    </div>
                    <h3 className="proBoxInfo">TypeScript<span>90%</span></h3>
                    <div className="proBoxBar">
                        <div className="proBoxProgress" style={{width: "70%"}}></div>
                    </div>

                    <hr style={{width: "50%", margin: "50px 25% 30px 25%"}} />


                    <h3 className="proBoxInfo">Node.js<span>85%</span></h3>
                    <div className="proBoxBar">
                        <div className="proBoxProgress" style={{width: "85%"}}></div>
                    </div>
                    <h3 className="proBoxInfo">Express<span>70%</span></h3>
                    <div className="proBoxBar">
                        <div className="proBoxProgress" style={{width: "70%"}}></div>
                    </div>
                    <h3 className="proBoxInfo">ReactJS<span>90%</span></h3>
                    <div className="proBoxBar">
                        <div className="proBoxProgress" style={{width: "90%"}}></div>
                    </div>
                    <h3 className="proBoxInfo">MongoDB<span>70%</span></h3>
                    <div className="proBoxBar">
                        <div className="proBoxProgress" style={{width: "70%"}}></div>
                    </div>

                    <hr style={{width: "50%", margin: "50px 25% 30px 25%"}} />

                    <h3 className="proBoxInfo">Git/Github<span>80%</span></h3>
                    <div className="proBoxBar">
                        <div className="proBoxProgress" style={{width: "80%"}}></div>
                    </div>
                    <h3 className="proBoxInfo">Netlify<span>70%</span></h3>
                    <div className="proBoxBar">
                        <div className="proBoxProgress" style={{width: "70%"}}></div>
                    </div>
                    <h3 className="proBoxInfo">Heroku<span>70%</span></h3>
                    <div className="proBoxBar">
                        <div className="proBoxProgress" style={{width: "70%"}}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Capabilities