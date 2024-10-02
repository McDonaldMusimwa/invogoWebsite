import Home from "./Home";
import Services from "./Services";
import Footer from "./Footer";
import AboutUs from "./AboutUs";
//import ScrollUp from "../components/ScrollUp";
import styles from "./styles/Main.module.css";
function Main() {
  return (
    <div className={styles.mainSection}>
      <Home />
      <Services />
      <hr></hr>
      <AboutUs />
      <hr></hr>
      <Footer />
      {/*<ScrollUp />*/}
    </div>
  );
}

export default Main;
