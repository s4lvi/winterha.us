import styles from "./Footer.module.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

export const Footer = () => {
    return <section className={styles.footer}>
        <p>&copy; 2023 jordan salvi</p>
        <div>
            <a href="https://github.com/s4lvi"><GitHubIcon sx={{ color: '#160C28', marginRight:"1em"}} /></a>
            <a href="https://twitter.com/mivlas"><TwitterIcon sx={{ color: '#160C28' }} /></a>
        </div>
    </section>
}