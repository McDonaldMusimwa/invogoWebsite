import React from "react";
import ButtonCustom from "../components/ButtonCustom";
import styles from "./styles/Home.module.css";
import mobileappPic from "/images/file.png";
import bannar from "../data/data";
import BannerItem from "../components/Home/BannerItem";

function Home() {
  return (
    <>
      <div className={styles.home}></div>

      <div id="home" className={styles.HomeWrapper}>
        <div className={styles.HomeContainer}>
          <div className={styles.TextContainer}>
          {/*   
            <span className={styles.ConstructionBanner}>
              <h3 className={styles.blink}>
                This website is under construction
              </h3>
            </span>*/}
            <h1 className={styles.HeroLargeText}>
              Innovative{" "}
              <span className={styles.HeroLargeTextCustom}>
                Mobile App Developed
              </span>{" "}
              by Small Business for Small Business
            </h1>
            <p className={styles.Description}>
              Invogo is a disruptive mobile application developed for
              streamlining the ease of doing business for tradespeople. Whether
              you are a plumber, electrician, or any other business owner, we
              make invoicing and accounting very easy for you.
            </p>
            <div className={styles.CustomButton}>
              <ButtonCustom>Get Started</ButtonCustom>
            </div>
          </div>
          <div className={styles.ImageContainer}>
            <span className={styles.marketing2}>
            
            
              <img
                src="https://img.icons8.com/?size=100&id=QMLc3m7lIG14&format=png&color=228BE6"
                alt="thumbs up"
              />
              100% Client Driven
            </span>
            <img
              src={mobileappPic}
              alt="Invogo App"
              className={styles.AppImage}
            />
            <span className={styles.marketing}>10+ Free Invoices</span>
          </div>
        </div>
        <div className={styles.HomeBottomBanner}>
          {bannar.map((item) => (
            <BannerItem text={item.message} image={item.image} key={item.key} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
