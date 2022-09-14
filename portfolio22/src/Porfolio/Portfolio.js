import ProjectList from '../ProjectList/ProjectList'
import ProjectInfo from '../ProjectInfo/ProjectInfo'
import Tags from '../Tags/Tags'
import Footer from "../Footer/Footer"
import React, {useState, useEffect} from 'react'

const Portfolio = () => {
    const [projects, setProjects] = useState({})
    const [currentTag, setCurrentTag] = useState()
    const [currentProject, setCurrentProject] = useState({})

    useEffect(() => {
        fetchProjects()
    }, [])

    const fetchProjects = () => {
        let url = "https://z2571uhn2d.execute-api.us-east-2.amazonaws.com/prod/projects";
        fetch(url).then((res) => res.json()).then((data) => {
            if (data) {
                data = JSON.parse(data.body);

                var titles = data.map(d => {
                    return d.title;
                });

                var projects = {};
                data.forEach(d => {projects[d.title] = d});
                setProjects(projects)
            }
        })
    }

    const selectProject = (title) => {
        if (projects[title]) {
            setCurrentProject(projects[title])
        }
    }

    const selectTag = (tag) => {
        setCurrentTag(tag)
    }

    return (
        <div className="page">
            <div className="inner-page">
            <div className="title">winterha.us / salvi portfolio</div>
            <hr />
            <div className="content">
                <div className="content-left">
                <ProjectList projects={projects} selectProject={selectProject} tag={currentTag} />
                <hr />
                <Tags projects={projects} selectTag={selectTag} />
                </div>
                <div className="content-right">
                <ProjectInfo project={currentProject} />
                </div>
            </div>
            </div>
            <Footer />
        </div>
    )
}

export default Portfolio;