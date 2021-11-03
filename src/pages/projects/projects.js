import React, {useEffect} from "react";
import './projects.css'

//Services
import { pages } from "../../services/constants";
import ScrollControl from "../../services/scrollControl";
import SVGServer from "../../services/svgServer";

let projectInfo = [
    {
        Name: "AJ Online",
        Spec: {
            Desc: "Online CV/Resume",
            Components: "HTML, CSS, ReactJS",
            Git: ""
        },
        URL: ""
    },
    {
        Name: "Z.E.U.S",
        Spec: {
            Desc: "Chatbot",
            Components: "HTML, CSS, ReactJS",
            Git: "https://github.com/LordofTriton/Zenith-Emergent-Uplifting-System-Z.E.U.S-.git"
        },
        URL: "https://zeus-chat.herokuapp.com"
    },
    {
        Name: "SVMS",
        Spec: {
            Desc: "Visitor Management",
            Components: "HTML, CSS, ReactJS",
            Git: ""
        },
        URL: ""
    },
    {
        Name: "Blockstacle",
        Spec: {
            Desc: "Browser Game",
            Components: "HTML, CSS, JavaScript",
            Git: "https://github.com/LordofTriton/Blockstacle.git"
        },
        URL: "https://blockstacle.herokuapp.com"
    }
]

const Projects = ({CortexControl}) => {
    const toggle = CortexControl.currentPage;
    const pageControl = CortexControl.setCurrentPage;

    let page = document.getElementById("page")
    useEffect(() => {
        if (page) {
            page.focus()
        }
    }, [toggle, page])
    
    return(
        <div className="pageContainer" style={{top: toggle <= pages.Projects ? "0px" : "-100vh"}}>
            <div id="page" className="projectsContainer" onWheel={(e) => toggle === pages.Projects ? ScrollControl(e, pageControl, toggle) : null}>
                <h1 className="pageContainerTitle"><span>My</span> Projects</h1>
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