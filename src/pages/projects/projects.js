import React from "react";
import './projects.css'

//Services
import { pages } from "../../services/constants";
import SVGServer from "../../services/svgServer";

let projectInfo = [
    {
        Name: "AJ Online",
        Spec: {
            Desc: "Online CV/Resume",
            Components: "HTML, CSS, ReactJS",
            Git: "https://github.com/LordofTriton/AJOnline.git"
        },
        URL: ""
    },
    {
        Name: "Xalen",
        Spec: {
            Desc: "Chatbot",
            Components: "HTML, CSS, ReactJS",
            Git: "https://github.com/LordofTriton/Xalen.git"
        },
        URL: "https://xalen.netlify.app"
    },
    {
        Name: "SnoeFlag",
        Spec: {
            Desc: "Musical Artiste",
            Components: "HTML, CSS, ReactJS",
            Git: "https://github.com/LordofTriton/SnoeFlag.git"
        },
        URL: "https://snoeflag.netlify.app"
    },
    {
        Name: "PACEPS",
        Spec: {
            Desc: "Landing Page",
            Components: "HTML, CSS, JavaScript",
            Git: ""
        },
        URL: "https://pacepsonline.netlify.app"
    },
    {
        Name: "Butterfingers",
        Spec: {
            Desc: "Bakery Website",
            Components: "HTML, CSS, JavaScript",
            Git: ""
        },
        URL: "https://butterfingers.netlify.app"
    },
    {
        Name: "Currency Converter",
        Spec: {
            Desc: "Currency Converter",
            Components: "HTML, CSS, JavaScript",
            Git: ""
        },
        URL: "https://grcurrencyconverter.netlify.app"
    },
    {
        Name: "Echo Social",
        Spec: {
            Desc: "Basic social media platform.",
            Components: "NextJS, SOcket.IO",
            Git: "https://www.github.com/LordofTriton/EchoSocial"
        },
        URL: "https://echo-social.vercel.app"
    }
]

const Projects = ({CortexControl}) => {
    const toggle = CortexControl.currentPage;
    
    return(
        <div className="pageContainer" style={{top: toggle <= pages.Projects ? "0px" : "-100vh"}}>
            <div id="page" className="projectsContainer">
                <h1 className="pageContainerTitle"><span>My</span> Projects</h1>
                <br />
                <br />
                {
                    projectInfo.map((project) =>
                        <div className="projectEntry">
                            <h3 className="projectName" onClick={() => project.URL ? document.location = project.URL : null}>{project.Name}</h3>
                            <h3 className="projectSpec">
                                {project.Spec.Desc}
                                <span>|</span>
                                {project.Spec.Components}
                                <span>|</span>
                            </h3>
                            {project.Spec.Git ?
                                <div className="projectSpecGit" onClick={() => document.location = project.Spec.Git}>
                                    <SVGServer.Github color="white" width="100%" height="100%" />
                                </div>
                                : null
                            }
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Projects