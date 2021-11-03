import React from "react";
import './footer.css'

//Services
import SVGServer from "../../../services/svgServer";

const Footer = () => {
    return(
        <div className="footerContainer">
            <h3 className="footerRights">&copy; AJ 2020.</h3>

            <div className="footerIcons" onClick={() => document.location = "https://github.com/LordofTriton"}>
                <SVGServer.Github color="#FFFFFF" width="100%" height="100%" />
            </div>
            <div className="footerIcons">
                <SVGServer.LinkedIn color="#FFFFFF" width="100%" height="100%" />
            </div>
            <div className="footerIcons">
                <SVGServer.Gmail color="#FFFFFF" width="100%" height="100%" />
            </div>
            <div className="footerIcons">
                <SVGServer.FaceBook color="#FFFFFF" width="100%" height="100%" />
            </div>
            <div className="footerIcons">
                <SVGServer.Twitter color="#FFFFFF" width="100%" height="100%" />
            </div>
        </div>
    )
}

export default Footer;