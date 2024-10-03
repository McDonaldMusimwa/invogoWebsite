import styles from "./NavBar.module.css";
import ButtonCustom from "../ButtonCustom";
import { Link } from "react-scroll";
import logo from "../../public/images/favconbg.png";

function NavBar() {
  const navigateToContactPageHandler = () => {
    console.log("navigate to contact page");
  };
  return (
    <nav>
      <div className={styles.LogoContainer}>
        <img src={logo} width={80} height={50} alt="logo" />
       <h1>InvoGo</h1>
      </div>
      <ul className={styles.navList}>
        <li>
          <a href="#home">
            Home
          </a>
        </li>
        <li>
          <a href="#services">
            Services
          </a>
        </li>
        <li>
          <a href="#mobileapp">Mobile App</a>
        </li>
        <li>
          <a href="#aboutus">
            About
          </a>
        </li>
        <ButtonCustom onClick={navigateToContactPageHandler}>
          Contact Us
        </ButtonCustom>
      </ul>
    </nav>
  );
}

export default NavBar;
