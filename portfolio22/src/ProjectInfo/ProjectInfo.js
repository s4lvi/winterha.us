import React, {useEffect, useState} from "react"

const ProjectInfo = (props) => {

    const [tags, setTags] = useState([])

    useEffect(() => {
        if (props.project && props.project.tags && props.project.tags.length > 0) {
            setTags(props.project.tags.map(t => {
                return <li key={t}>{t}</li>
            }))
        }
    }, [props.project])

    return (
        <React.Fragment>
            { props.project && props.project.tags && 
                <div className="project-info">
                    <a href={props.project.link}>{props.project.title}</a><i>{" - "}{props.project.year}</i><br />
                    {props.project.description}<br /><br />
                    {"tags: "}<br /><br />
                    <ul className="tag-list">{tags}</ul>
                </div>
            }
        </React.Fragment>
    )
}

export default ProjectInfo;