import * as React from "react"
import ProjectList from '../ProjectList/ProjectList';
import ProjectInfo from '../ProjectInfo/ProjectInfo';
import Footer from "../Footer/Footer";

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projectTitles: [], 
            projects: {},
            currentProject: {}
        }

        this.fetchProjects = this.fetchProjects.bind(this);
        this.selectProject = this.selectProject.bind(this);
    }

    componentDidMount() {
        this.fetchProjects();
    }

    fetchProjects() {
        let url = "https://z2571uhn2d.execute-api.us-east-2.amazonaws.com/prod/projects";
        fetch(url).then((res) => res.json()).then((data) => {
            if (data) {
                data = JSON.parse(data.body);

                var titles = data.map(d => {
                    return d.title;
                });

                var projects = {};
                data.forEach(d => {projects[d.title] = d});

                this.setState({projects:projects, projectTitles:titles})
            }
        })
    }

    selectProject(title) {
        if (this.state.projects[title]) {
            this.setState({currentProject:this.state.projects[title]});
        }
    }

    render() {
        return (
            <div className="page">
              <div className="inner-page">
                <div className="title">winterha.us / salvi portfolio</div>
                <hr />
                <div className="content">
                  <div className="content-left">
                    <ProjectList titles={this.state.projectTitles} selectProject={this.selectProject} />
                  </div>
                  <div className="content-right">
                    <ProjectInfo project={this.state.currentProject} />
                  </div>
                </div>
              </div>
              <Footer />
            </div>
        )
    }
}

export default Portfolio;