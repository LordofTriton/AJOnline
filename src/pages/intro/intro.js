import React from "react";
import './intro.css'

//Services
import { pages } from "../../services/constants";
import SVGServer from "../../services/svgServer";

import Resume from "../../assets/NewResume.pdf"
import { useScroll } from "../../hooks/useScroll";

const Intro = ({ CortexControl }) => {
    const toggle = CortexControl.currentPage;
    const pageControl = CortexControl.setCurrentPage;

    const { scrollRef } = useScroll(toggle, pageControl);

    return (
        <div className="pageContainer" style={{ top: toggle <= pages.Intro ? "0px" : "-100vh" }}>
            <div id="page" className="introContainer" ref={scrollRef}>

                <h3 className="introMessage"><span>Howdy</span>, I'm Josh.</h3>

                <a href={Resume} download="AJ's Resume.">
                    <div className="resumeButton">
                        <hr />
                        <div className="downloadButton">
                            <SVGServer.Book color="var(--orange-peel)" width="100%" height="100%" />
                        </div>
                        <h3>Here's My Resume</h3>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Intro