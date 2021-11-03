import React from "react";
import SVGServer from "../../../services/svgServer";
import './header.css'

const Title = () => {
    return(
        <>
            <div className="sampleLogo">
                <h3>AJ</h3>
            </div>
            <h3 className="sampleLogoText">ONLINE</h3>
        </>
    )
}

const Header = ({CortexControl}) => {
    const navControl = CortexControl.setNavMode;
    
    return(
        <div className="headerContainer">
            <Title />
            <div className="menuIcon" onClick={() => navControl(true)}>
                <SVGServer.Menu color="#FFFFFF" width="100%" height="100%" />
            </div>
        </div>
    )
}

export default Header;