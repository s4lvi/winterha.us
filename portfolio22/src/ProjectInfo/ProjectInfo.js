import * as React from "react"

class ProjectInfo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            project: null
        }
    }
    
    componentWillReceiveProps(nextProps) {
        this.setState({project:nextProps.project});
    }

    render() {
        var tags = [];
        if (this.state.project && this.state.project.tags && this.state.project.tags.length > 0) {
            tags = this.state.project.tags.map(t => {
                return <li key={t}>{t}</li>
            })
        }
        return (
            <React.Fragment>
                { this.state.project && this.state.project.tags && 
                    <div className="project-info">
                        <a href={this.state.project.link}>{this.state.project.title}</a><i>{" - "}{this.state.project.year}</i><br />
                        {this.state.project.description}<br /><br />
                        {"tags: "}<br /><br />
                        <ul className="tag-list">{tags}</ul>
                    </div>
                }
            </React.Fragment>
        )
    }
}

export default ProjectInfo;