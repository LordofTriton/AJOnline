import React from "react";
import './capabilities.css'

//Services
import { pages } from "../../services/constants";

const Capabilities = ({CortexControl}) => {
    const toggle = CortexControl.currentPage;
    
    return(
        <div className="pageContainer" style={{top: toggle <= pages.Capabilities ? "0px" : "-100vh"}}>
            <div id="page" className="capabilitiesContainer">
                {/* <h1 className="pageContainerTitle"><span>My</span> Skills</h1> */}

                <div className="expBox">
                    <h3 className="expNum">4</h3>
                    <h3 className="expText">Years Coding Experience</h3>
                    <hr style={{width: "50%", margin: "0px 25% 0px 25%", transform: "translate(0px, 20px)"}} />
                </div>
                <div className="proBox">
                    <h3 className="proBoxTitle">Proficiency</h3>
                    <h3 className="proBoxText">These are the results of my training and hard work. :)</h3>

                    <h3 className="proBoxInfo">HTML<span>100%</span></h3>
                    <div className="proBoxBar">
                        <div className="proBoxProgress" style={{width: "100%"}}></div>
                    </div>
                    <h3 className="proBoxInfo">CSS<span>100%</span></h3>
                    <div className="proBoxBar">
                        <div className="proBoxProgress" style={{width: "100%"}}></div>
                    </div>
                    <h3 className="proBoxInfo">JavaScript<span>90%</span></h3>
                    <div className="proBoxBar">
                        <div className="proBoxProgress" style={{width: "90%"}}></div>
                    </div>
                    <h3 className="proBoxInfo">PHP<span>50%</span></h3>
                    <div className="proBoxBar">
                        <div className="proBoxProgress" style={{width: "50%"}}></div>
                    </div>

                    <hr style={{width: "50%", margin: "50px 25% 30px 25%"}} />

                    <h3 className="proBoxInfo">ReactJS<span>90%</span></h3>
                    <div className="proBoxBar">
                        <div className="proBoxProgress" style={{width: "90%"}}></div>
                    </div>
                    <h3 className="proBoxInfo">AngularJS<span>20%</span></h3>
                    <div className="proBoxBar">
                        <div className="proBoxProgress" style={{width: "20%"}}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Capabilities