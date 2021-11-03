import React, { useEffect } from "react";
import './intro.css'

//Services
import { pages } from "../../services/constants";
import SVGServer from "../../services/svgServer";
import ScrollControl from "../../services/scrollControl";

const Intro = ({CortexControl}) => {
    const toggle = CortexControl.currentPage;
    const pageControl = CortexControl.setCurrentPage;

    let page = document.getElementById("page")
    useEffect(() => {
        if (page) {
            page.focus()
        }
    }, [toggle, page])
    
    return(
        <div className="pageContainer" style={{top: toggle <= pages.Intro ? "0px" : "-100vh"}}>
            <div id="page" className="introContainer" onWheel={(e) => toggle === pages.Intro ? ScrollControl(e, pageControl, toggle) : null}>
                <h3 className="introMessage"><span>Howdy</span>, I'm Josh.</h3>

                <div className="resumeButton">
                    <hr />
                    <div className="downloadButton">
                        <SVGServer.Book color="var(--orange-peel)" width="100%" height="100%" />
                    </div>
                    <h3>Here's My Resume</h3>
                </div>

                {/* <h3 className="introSubSubMessage">I love programming and I built this webpage as proof :)</h3> */}
            </div>
        </div>
    )
}

export default Intro