import React from "react";
import styles from "./styles/AboutUs.module.css";
function AboutUs() {
  return (
    <div id="aboutus" className={styles.container}>
      <h1 className={styles.title}>Who are we ?</h1>
      <div className={styles.AboutUs}>
      <div>
      <h2 className={styles.subtitle}>About Invogo</h2>
        <p className={styles.description}>
          Welcome to <strong>Invogo</strong>, the ultimate invoicing solution
          for professionals who need quick, easy, and unsophisticated tools to
          create invoices on the go! Whether you're a plumber, an electrician,
          or a freelancer, Invogo is here to simplify your invoicing process.
        </p>

        <h2 className={styles.subtitle}>Our Mission</h2>
        <p className={styles.description}>
          Our mission is to empower professionals with an easy-to-use mobile app
          that simplifies invoicing without the need for complex systems. At
          Invogo, we believe that invoicing should be quick, effortless, and
          accessible to everyone.
        </p>
        </div>
        <div>
        <h2 className={styles.subtitle}>Core Features</h2>
        <ul className={styles.list}>
          <li>
            📱 <strong>Mobile-friendly:</strong> A seamless experience on your
            mobile device, wherever you are.
          </li>
          <li>
            📄 <strong>PDF Invoices:</strong> Generate professional invoices in
            just a few taps.
          </li>
          <li>
            🔗 <strong>Shareability:</strong> Share your invoices via social
            media or WhatsApp effortlessly.
          </li>
          <li>
            🚀 <strong>Time-saving:</strong> Streamlined workflows designed for
            busy professionals.
          </li>
        </ul>

        <h2 className={styles.subtitle}>Why Choose Invogo?</h2>
        <p className={styles.description}>
          Invogo stands out with its focus on simplicity and practicality. No
          complicated setups, just an intuitive tool that makes invoicing as
          simple as it should be. Save time and focus on what truly matters –
          your work.
        </p>
      </div>
      </div>
      <p className={styles.footer}>
        <strong>Built with ❤️ as a final school project.</strong> Thank you for
        supporting Invogo. Your success is our motivation!
      </p>
    </div>
  );
}

export default AboutUs;
