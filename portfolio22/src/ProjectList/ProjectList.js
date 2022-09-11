import React, {useState, useEffect} from "react"

const ProjectList = (props) => {
    const [projects, setProjects] = useState([])
    const [tag, setTag] = useState()
    const [tagList, setTagList] = useState([])

    const select = (title) => {
        props.selectProject(title)
    }
    
    const selectTag = (tag) => {
        setTag(tag)
    }

    useEffect(() => {
        if (props.projects && Object.keys(props.projects).length > 0) {
            setProjects(Object.keys(props.projects).map(p => {
                return <li onMouseEnter={() => select(props.projects[p].title)} key={props.projects[p].title}>{"> "}{props.projects[p].title}</li>
            }))
        }
    }, [props.projects])

    return (
        <React.Fragment>
            {projects.length > 0 &&
                <ul className="title-list">{projects}</ul>
            }
            {tagList.length > 0 && 
                <ul className="title-list">{tagList}</ul>
            }
        </React.Fragment>
    )
}

export default ProjectList;