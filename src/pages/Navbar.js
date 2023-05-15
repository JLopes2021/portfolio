import styles from '../layouts/Nabar.module.css'
import Container from './Container'
import { FaLinkedin, FaGithub } from 'react-icons/fa'



function Navbar() {
    return ( 
    <nav className = { styles.navbar } >
        <Container>
        <ul className= {styles.list}>
            <li className= {styles.item}><FaGithub/></li>
            <li className= {styles.item}><FaLinkedin/></li>
        </ul>

        </Container>
        
        </nav>

        
    )
}
export default Navbar