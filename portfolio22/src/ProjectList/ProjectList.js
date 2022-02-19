import * as React from "react"

class ProjectList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            titles: []
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({titles:nextProps.titles});
    }   
    
    select(title) {
        this.props.selectProject(title);
    }

    render() {
        var titles = [];
        if (this.state.titles && this.state.titles.length > 0) {
            titles = this.state.titles.map(t => {
                return <li onClick={() => this.select(t)} key={t}>{t}</li>
            })
        }
        return (
            <React.Fragment>
                {titles.length > 0 &&
                    <ul className="title-list">{titles}</ul>
                }
            </React.Fragment>
        )
    }
}

export default ProjectList;