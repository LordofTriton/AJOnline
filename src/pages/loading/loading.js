import React, { useState } from "react";
import './loading.css'

const Loading = () => {
    const [display, setDisplay] = useState(true)

    setTimeout(() => setDisplay(false), 5000)

    return(
        <div className="pageContainer" style={{display: display ? "block" : "none"}}>
            <div className="loader"></div>
        </div>
    )
}

export default Loading;