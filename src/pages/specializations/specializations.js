import React from "react";
import './specializations.css'

//Components
import HUD from "../../hud/hud";

//Services
import { pages } from "../../services/constants";
import SVGServer from "../../services/svgServer";

const Specializations = ({CortexControl}) => {
    const toggle = CortexControl.currentPage;
    
    return(
        <div className="pageContainer" style={{top: toggle <= pages.Specializations ? "0px" : "-100vh"}}>
            <div id="page" className="specContainer">
                <h1 className="pageContainerTitle"><span>My</span> Specializations</h1>
                <div className="specBoxContainer">
                    <div className="specBox">
                        <div className="specBoxImg">
                            <SVGServer.Web color="var(--heat-wave)" width="100%" height="100%" />
                        </div>
                        <h3 className="specBoxTitle">Websites and Webpages</h3>
                        <h3 className="specBoxInfo">I can provide high quality, visually stunning, and optimised websites and webpages to suit your needs, whatever they may be. </h3>
                        <hr style={{width: "70%", marginLeft: "20px"}} />
                    </div>
                    <div className="specBox">
                        <div className="specBoxImg">
                            <SVGServer.WebApp color="var(--heat-wave)" width="100%" height="100%" />
                        </div>
                        <h3 className="specBoxTitle">Web Applications</h3>
                        <h3 className="specBoxInfo">I can build full scale web applications, e-commerce websites, and more, using ReactJS, NextJS, and MongoDB. I deliver excellent products in a short amount of time.</h3>
                        <hr style={{width: "70%", marginLeft: "20px"}} />
                    </div>
                    <div className="specBox">
                        <div className="specBoxImg">
                            <SVGServer.Brush color="var(--heat-wave)" width="100%" height="100%" />
                        </div>
                        <h3 className="specBoxTitle">Design</h3>
                        <h3 className="specBoxInfo">I'm fairly proficient in designing application using popular design tools such as Figma and Adobe XD. I'm a very creative designer with an eye for detail.</h3>
                        <hr style={{width: "70%", marginLeft: "20px"}} />
                    </div>
                </div>
            </div>

            <HUD.HoverText text="Agboola Joshua" />
        </div>
    )
}

export default Specializations