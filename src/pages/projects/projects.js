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
        Name: "SVMS",
        Spec: {
            Desc: "Visitor Management System",
            Components: "HTML, CSS, ReactJS",
            Git: ""
        },
        URL: "svms.netlify.app"
    },
    {
        Name: "SnoeFlag",
        Spec: {
            Desc: "Musical Artiste",
            Components: "HTML, CSS, ReactJS",
            Git: "https://github.com/LordofTriton/SnoeFlag.git"
        },
        URL: "snoeflag.netlify.app"
    },
    {
        Name: "PACEPS",
        Spec: {
            Desc: "Landing Page",
            Components: "HTML, CSS, JavaScript",
            Git: ""
        },
        URL: "pacepsonline.netlify.app"
    },
    {
        Name: "Blockstacle",
        Spec: {
            Desc: "Browser Game",
            Components: "HTML, CSS, JavaScript",
            Git: "https://github.com/LordofTriton/Blockstacle.git"
        },
        URL: "https://blockstacle.netlify.app"
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