import React, {useEffect} from "react";
import './specializations.css'

//Components
import HUD from "../../hud/hud";

//Services
import { pages } from "../../services/constants";
import SVGServer from "../../services/svgServer";
import ScrollControl from "../../services/scrollControl";

const Specializations = ({CortexControl}) => {
    const toggle = CortexControl.currentPage;
    const pageControl = CortexControl.setCurrentPage;

    let page = document.getElementById("page")
    useEffect(() => {
        if (page) {
            page.focus()
        }
    }, [toggle, page])
    
    return(
        <div className="pageContainer" style={{top: toggle <= pages.Specializations ? "0px" : "-100vh"}}>
            <div id="page" className="specContainer" onWheel={(e) => toggle === pages.Specializations ? ScrollControl(e, pageControl, toggle) : null}>
                <h1 className="pageContainerTitle"><span>My</span> Specializations</h1>
                <div className="specBoxContainer">
                    <div className="specBox">
                        <div className="specBoxImg">
                            <SVGServer.Web color="var(--heat-wave)" width="100%" height="100%" />
                        </div>
                        <h3 className="specBoxTitle">Websites and Webpages</h3>
                        <h3 className="specBoxInfo">Working with client and community, we deliver masterplans that create vibrant new places and spaces, attract people, and encourage investment through.</h3>
                        <hr style={{width: "70%", marginLeft: "20px"}} />
                    </div>
                    <div className="specBox">
                        <div className="specBoxImg">
                            <SVGServer.WebApp color="var(--heat-wave)" width="100%" height="100%" />
                        </div>
                        <h3 className="specBoxTitle">Web Applications</h3>
                        <h3 className="specBoxInfo">Working with client and community, we deliver masterplans that create vibrant new places and spaces, attract people, and encourage investment through.</h3>
                        <hr style={{width: "70%", marginLeft: "20px"}} />
                    </div>
                    <div className="specBox">
                        <div className="specBoxImg">
                            <SVGServer.Brush color="var(--heat-wave)" width="100%" height="100%" />
                        </div>
                        <h3 className="specBoxTitle">Design</h3>
                        <h3 className="specBoxInfo">Working with client and community, we deliver masterplans that create vibrant new places and spaces, attract people, and encourage investment through.</h3>
                        <hr style={{width: "70%", marginLeft: "20px"}} />
                    </div>
                </div>
            </div>

            <HUD.HoverText text="Agboola Joshua" />
        </div>
    )
}

export default Specializations