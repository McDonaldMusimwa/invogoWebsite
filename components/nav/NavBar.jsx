import styles from './NavBar.module.css'
import ButtonCustom from '../ButtonCustom'
import { Link } from 'react-router-dom'


function NavBar() {
    const navigateToContactPageHandler=()=>{
        console.log('navigate to contact page')
    }
    return <nav>
        <ul className={styles.navList}>
            <li><Link to={'home'} >Home</Link></li>
            <li><Link to={'/services'}>Services</Link></li>
            <li><Link to={'gallery'}>Gallery</Link></li>
            <li><Link to={'company'}>Company</Link></li>
            <ButtonCustom onClick={navigateToContactPageHandler}>Contact Us</ButtonCustom>
        </ul>
    </nav>
}

export default NavBar