
import styles from "./styles/AboutUs.module.css";
import aboutImage from '../../public/images/workpeople.png';

function AboutUs() {
  return (
    <div id="aboutus" className={styles.container}>
      <h1 className={styles.title}>Who are we ?</h1>
      <div className={styles.mission}>  <h2 className={styles.subtitle}>Our Mission</h2>   <p className={styles.description}>
              Our mission is to empower professionals with an easy-to-use mobile app
              that simplifies invoicing without the need for complex systems. At
              Invogo, we believe that invoicing should be quick, effortless, and
              accessible to everyone.
            </p> </div>
      <div className={styles.AboutUs}>
      

          <div className={styles.aboutContent}>
            <div>
              <h2 className={styles.subtitle}>About Invogo</h2>
              <p className={styles.description}>
              Welcome to <strong>Invogo</strong>, the ultimate invoicing solution
                for professionals who need quick, easy, and unsophisticated tools to
                create invoices on the go! Whether you&#39;re a plumber, an electrician,
                or a freelancer, Invogo is here to simplify your invoicing process.
              </p>
            </div>
            <img src={aboutImage} alt="About Us" className={styles.aboutImage} loading="lazy" />
          </div>



      </div>

    </div>
  );
}

export default AboutUs;
