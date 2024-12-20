import React, { useState } from "react";
import styles from "./Service.module.css";

function Service({ image, text, title, id }) {
  return (
    <div className={styles.ServiceCard} id={id}>
      <img src={image} alt={title} height={40} width={40} />
      <h3>{title}</h3>
      <p>
        <span
          className="text-violet-400 ml-2"
          role="button"
          tabIndex={0}
          aria-controls={id}
        >
          {text}
        </span>
      </p>
    </div>
  );
}

export default Service;
