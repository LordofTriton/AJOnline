import React from "react";
import './hud.css'

//Services
// import { pages } from "../services/constants";

//Components
import SwitchKeys from "./components/switchKeys/switchKeys";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import SideNav from "./components/sideNav/sideNav";

const HoverText = ({text}) => {
    return(
        <div className="hoverTextContainer">
            <h3 className="hoverText">{text}</h3>
        </div>
    )
}

const HUD = {SwitchKeys, Footer, Header, SideNav, HoverText}

export default HUD;