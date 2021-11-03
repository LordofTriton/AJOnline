import React from "react";
import './switchKeys.css'

//Services
import { pages } from "../../../services/constants";

const SwitchKeys = ({CortexControl}) => {
    const pageIndex = CortexControl.currentPage;
    const pageControl = CortexControl.setCurrentPage;

    return(
        <div className="keyContainer">
            {
                Object.keys(pages).map((page) => 
                    <div className="key" onClick={() => pageControl(pages[page])} style={{backgroundColor: pageIndex === pages[page] ? "#ff9e00ff" : null}}></div>
                )
            }
        </div>
    )
}

export default SwitchKeys