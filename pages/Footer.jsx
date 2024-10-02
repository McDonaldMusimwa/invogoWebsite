import React from "react";
import { Link } from "react-scroll";
import styles from "./styles/Footer.module.css";
function Footer() {
  return (
    <footer id="footer" className={styles.footerContainer}>
      <div className={styles.detailsContainer}>
        <div className={styles.contactUs}>
          <h4>Contact Us</h4>
          <span>Phone: +27 67 103 3055</span>
          <span>Email: mcddev.tech</span>
          <span>Website:<a href="https://mcdonald.onrender.com">Visit</a></span>
        </div>
        <div className={styles.footerServices}>
          <h4>Services</h4>
          <ul>
          <li>Web & Mobile Design</li>
          <li>Web and Mobile Development</li>

          </ul>
        </div>
        <div className={styles.location}>
          <h4>Offices</h4>
          <span>77 Orion Street</span>
          <span>Surrey Estate Capetown</span>
        </div>
      </div>
      <div className={styles.termsContainer}>
        <span style={{textAlign:'center'}}>
          &#169;<Link to={"termsandcondition"}>InvoGo</Link> All rights reserved
        </span>
      </div>
    </footer>
  );
}

export default Footer;
