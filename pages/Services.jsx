import React from "react";
import styles from "./styles/Services.module.css";
import { services } from "../data/data";
import Service from "../components/Services/Service";
const Services = () => {
  const toggleExpandHandler=()=>{
    setIsExpanded(!isExpanded)
  }
  return (
    <div id="services" className={styles.ServicesContainer}>
      <div className={styles.lineContainer}>
        <div className={styles.line}></div>
        <h2 className={styles.ServicesText}>
          <span className={styles.ServicesTextCustom}>Our Services</span>{" "}
          Tailered to fit your needs
        </h2>
        <div className={styles.line}></div>
      </div>
      <div className={styles.ServiceGrid}>
      {services.map((service) => {
        return (
          <Service
            title={service.title}
            image={service.image}
            text={service.message}
            key={service.key}
            id={service.key.toString()}
            toggleHandler={toggleExpandHandler}
          />
        );
      })}
    </div>
    </div>
  );
};

export default Services;
