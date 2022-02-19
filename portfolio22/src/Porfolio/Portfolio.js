import * as React from "react"
import ProjectList from '../ProjectList/ProjectList';
import ProjectInfo from '../ProjectInfo/ProjectInfo';
import Footer from "../Footer/Footer";

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="page">
              <div className="inner-page">
                <div className="title">salvi / codeweekend portfolio</div>
                <hr />
                <div className="content">
                  <div className="content-left">
                    <ProjectList />
                  </div>
                  <div className="content-right">
                    <ProjectInfo />
                  </div>
                </div>
              </div>
              <Footer />
            </div>
        )
    }
}

export default Portfolio;