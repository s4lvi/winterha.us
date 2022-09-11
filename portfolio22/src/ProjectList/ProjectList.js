import React, {useState, useEffect} from "react"

const ProjectList = (props) => {
    const [projects, setProjects] = useState([])
    //const [tag, setTag] = useState()
    const [tagList, setTagList] = useState([])

    const select = (title) => {
        props.selectProject(title)
    }
    
    const selectTag = (tag) => {
        updateProjects(tag)
    }

    const updateProjects = (tag=null) => {
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
        updateProjects()
        if (props.projects && Object.keys(props.projects).length > 0) {
            var tags = new Set()
            Object.keys(props.projects).map(p => {
                props.projects[p].tags.map(t => {
                        tags.add(t)
                })
            })
            setTagList(Array.from(tags).map(t => {
                return <li onClick={() => selectTag(t)} key={t}>{t}</li>
            }))
        }

    }, [props.projects])

    return (
        <React.Fragment>
            {projects.length > 0 &&
                <ul className="title-list">{projects}</ul>
            }
            <hr />
            tags:
            {tagList.length > 0 && 
                <ul className="tag-list">{tagList}</ul>
            }
        </React.Fragment>
    )
}

export default ProjectList;