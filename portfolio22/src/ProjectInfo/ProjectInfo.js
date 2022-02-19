import * as React from "react"

class ProjectInfo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            project: props.project
        }
    }
    
    componentWillReceiveProps(nextProps) {
        this.setState({project:nextProps.project});
    }

    render() {
        return (
            <React.Fragment>
                { this.state.project &&
                    <div className="project-info">
                        <a href={this.state.project.link}>{this.state.project.title}</a><br />
                        {this.state.project.description}<br />
                    </div>
                }
            </React.Fragment>
        )
    }
}

export default ProjectInfo;