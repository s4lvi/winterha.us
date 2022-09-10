import React, {useState, useEffect} from "react"

const ProjectList = (props) => {
    const [titles, setTitles] = useState([])

    const select = (title) => {
        props.selectProject(title);
    }

    if (props.titles && props.titles.length > 0) {
        setTitles(props.titles.map(t => {
            return <li onMouseEnter={() => this.select(t)} key={t}>{"> "}{t}</li>
        }))
    }

    return (
        <React.Fragment>
            {titles.length > 0 &&
                <ul className="title-list">{titles}</ul>
            }
        </React.Fragment>
    )
}

export default ProjectList;