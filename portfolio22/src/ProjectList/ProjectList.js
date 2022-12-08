import React, {useState, useEffect} from "react"

const ProjectList = (props) => {
    const [projects, setProjects] = useState([])
    const select = (title) => {
        props.selectProject(title)
    }

    const updateProjects = (tag="") => {
        if (props.projects && Object.keys(props.projects).length > 0) {
            setProjects(Object.keys(props.projects).map(p => {
                var highlight = props.projects[p].tags.includes(tag) ? 'tag-highlight' : ''
                return <li 
                        onMouseEnter={() => select(props.projects[p].title)} 
                        key={props.projects[p].title}
                        className={highlight}> 
                            {"> "}{props.projects[p].title}
                    </li>
            }))
        }
    }

    useEffect(() => {

        updateProjects(props.tag)

    }, [props.projects, props.tag])

    return (
        <React.Fragment>
            {projects.length > 0 &&
                <ul className="title-list">{projects}</ul>
            }
        </React.Fragment>
    )
}

export default ProjectList;