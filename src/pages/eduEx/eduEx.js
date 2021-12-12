import React from "react";
import './eduEx.css'

//Services
import { pages } from "../../services/constants";
import { WheelControl, ScrollControl } from "../../services/switchControl";

const EduEx = ({toggle, pageControl}) => {
    return(
        <div className="pageContainer" style={{top: toggle <= pages.EduEx ? "0px" : "-100vh"}}>
            <div id="page" className="eduexpContainer" onScroll={(e) => toggle === pages.EduEx ? ScrollControl(e, pageControl, toggle) : null}>
                {/* <h1 className="pageContainerTitle">EduEx</h1> */}
                <div className="eduContainer">
                    <h3 className="eduContainerTitle">Education</h3>
                    <div className="eduExEntry">
                        <h3 className="eduExEntryType">TUTORIAL COURSE</h3>
                    </div>
                </div>
                <div className="expContainer">
                    <h3 className="expContainerTitle">Experience</h3>
                </div>
            </div>
        </div>
    )
}

export default EduEx;