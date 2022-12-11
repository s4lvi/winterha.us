import React, {useState, useEffect} from 'react'

const Tags = (props) => {
    const [tagList, setTagList] = useState([])

    useEffect(() => {
        if (props.projects && Object.keys(props.projects).length > 0) {
            var tags = new Set()
            Object.keys(props.projects).map(p => {
                props.projects[p].tags.map(t => {
                        tags.add(t)
                })
            })
            setTagList(Array.from(tags).map(t => {
                return <li onClick={() => props.selectTag(t)} key={t}>{t}</li>
            }))
        }

    }, [props.projects
    ])

    return(
        <React.Fragment>
            {tagList.length > 0 && 
                <ul className="tag-list">{tagList}</ul>
            }
        </React.Fragment>
    )
}

export default Tags