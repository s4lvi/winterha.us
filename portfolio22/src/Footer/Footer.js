import * as React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

class Footer extends React.Component {

    render() {
        return (
            <div className="footer">
                <p>&copy; 2022 jordan salvi</p>
                <div>
                    <a href="https://github.com/s4lvi"><GitHubIcon sx={{ color: '#160C28', marginRight:"1em"}} /></a>
                    <a href="https://twitter.com/mivlas"><TwitterIcon sx={{ color: '#160C28' }} /></a>
                </div>
            </div>
        )
    }
}

export default Footer;