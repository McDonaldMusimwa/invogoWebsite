import addInvoice from "../public/assets/AddInvoiceScreen.png";
import Invoices from "../public/assets/InvoicesScreen.png";
import InvoiceScreen from "../public/assets/InvoiceScreen.png";
import styles from "./styles/Gallery.module.css";
import texts from "./styles/Home.module.css";
function MobileApp() {
  return (
    <div id="mobileapp" className={styles.gallery}>
      <div className={styles.lineContainer}>
        <div className={styles.line}></div>
        <h2 className={styles.ServicesText}>
          <span className={styles.ServicesTextCustom}>Ready to Invoice ?</span>{" "}
          Our simplified user interface
        </h2>
        <div className={styles.line}></div>
      </div>
      <div className={styles.GallerySection}>
        <div className={styles.Imagescontainer}>
          <div className={styles.image}>
            <img src={addInvoice} alt="invoices screen" />
          </div>
          <div className={styles.image}>
            <img src={Invoices} alt="invoices screen" />
          </div>

          <div className={styles.image}>
            <img src={InvoiceScreen} alt="invoices screen" />
          </div>
        </div>

        <div className={styles.directiveContainer}>
          <h2 className={styles.directiveHeading}>
            Stay Focused on your
            <span className={texts.HeroLargeTextCustom}> Profits</span>
          </h2>
          <p>
            Simplifying your invoicing process has never been easier. InvoGo's
            user-friendly interface allows you to create professional invoices
            in just a few clicks. No technical expertise required. Spend less
            time on paperwork and more time on what you love. With InvoGo,
            invoicing becomes a breeze.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MobileApp;
