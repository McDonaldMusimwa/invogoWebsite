import styles from "./NavBar.module.css";
import { useState, useEffect } from "react";
import ButtonCustom from "../ButtonCustom";
import logo from "../../../public/images/favconbg.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

function NavBar() {
  const [openBurgerMenu, setBurgerMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const navigateToContactPageHandler = () => {
    console.log("navigate to contact page");
  };

  useEffect(() => {
    const recalculateWindowSize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", recalculateWindowSize);
    return () => window.removeEventListener("resize", recalculateWindowSize);
  }, []);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (openBurgerMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [openBurgerMenu]);

  return (
    <nav className={styles.navbarContainer}>
      <div className={styles.LogoContainer}>
        <a href="#home">
          <img src={logo} className={styles.logo} alt="logo" />
          <h1>InvoGo</h1>
        </a>
        {windowWidth < 768 && (
          <button
            className={styles.hamburgerBtn}
            aria-label="Open menu"
            onClick={() => setBurgerMenu(true)}
          >
            <GiHamburgerMenu size={28} />
          </button>
        )}
      </div>

      {windowWidth < 768 ? (
        <>
          {/* Overlay */}
          {openBurgerMenu && (
            <div
              className={styles.overlay}
              onClick={() => setBurgerMenu(false)}
            />
          )}
          {/* Mobile Menu */}
          <div
            className={`${styles.mobileMenu} ${openBurgerMenu ? styles.open : ""}`}
          >
            <button
              className={styles.closeBtn}
              aria-label="Close menu"
              onClick={() => setBurgerMenu(false)}
            >
              <IoMdClose size={32} />
            </button>
            <ul className={styles.navListMobile}>
              <li>
                <a href="#home" onClick={() => setBurgerMenu(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#services" onClick={() => setBurgerMenu(false)}>
                  Services
                </a>
              </li>
              <li>
                <a href="#mobileapp" onClick={() => setBurgerMenu(false)}>
                  Mobile App
                </a>
              </li>
              <li>
                <a href="#aboutus" onClick={() => setBurgerMenu(false)}>
                  About
                </a>
              </li>
              <ButtonCustom onClick={() => { setBurgerMenu(false); navigateToContactPageHandler(); }}>
                Contact Us
              </ButtonCustom>
            </ul>
          </div>
        </>
      ) : (
        <ul className={styles.navList}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#mobileapp">Mobile App</a>
          </li>
          <li>
            <a href="#aboutus">About</a>
          </li>
          <ButtonCustom onClick={navigateToContactPageHandler}>
            Contact Us
          </ButtonCustom>
        </ul>
      )}
    </nav>
  );
}

export default NavBar;
