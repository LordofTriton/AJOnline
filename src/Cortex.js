import React, { useState } from "react";

//Components
import HUD from "./hud/hud";
import Reviewer from "./components/reviewer/reviewer";
import Blog from "./components/blog/blog";

//Pages
import Intro from "./pages/intro/intro";
import Projects from "./pages/projects/projects";
import Specializations from "./pages/specializations/specializations";
import Capabilities from "./pages/capabilities/capabilities";
import Clients from "./pages/clients/clients";
import Reviews from "./pages/reviews/reviews";
import News from "./pages/news/news";
import Contact from "./pages/contact/contact";
import Loading from "./pages/loading/loading";

//Services
import { pages } from "./services/constants";

const Cortex = () => {
    const [currentPage, setCurrentPage] = useState(pages.Intro)
    const [navMode, setNavMode] = useState(false)
    const [reviewer, setReviewer] = useState(false)
    const [blogPost, setBlogPost] = useState(null)
    const BaseAPI = "https://tritonserver.herokuapp.com"

    const CortexControl = {
        currentPage,
        setCurrentPage,
        navMode,
        setNavMode,
        reviewer,
        setReviewer,
        blogPost,
        setBlogPost,
        BaseAPI
    }

    return(
        <div className="displayContent">
            <Contact CortexControl={CortexControl} />
            <News CortexControl={CortexControl} />
            <Reviews CortexControl={CortexControl} />
            <Clients CortexControl={CortexControl} />
            <Projects CortexControl={CortexControl} />
            <Capabilities CortexControl={CortexControl} />
            <Specializations CortexControl={CortexControl} />
            <Intro CortexControl={CortexControl} />

            
            <HUD.SwitchKeys CortexControl={CortexControl} />
            <HUD.Footer />
            <HUD.Header CortexControl={CortexControl} />
            <HUD.SideNav CortexControl={CortexControl} />

            <Reviewer CortexControl={CortexControl} />
            <Blog CortexControl={CortexControl} />

            <HUD.HoverText text="Agboola Joshua" />

            <Loading />
        </div>
    )
}

export default Cortex;