import React, { useState } from "react";
import styles from "./Service.module.css";

function Service({
  image,
  text,
  title,
  id,
  amountOfWords = 20,
  toggleHandler,
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const splittedText = text?.split(" ");
  const itCanOverflow = splittedText?.length > amountOfWords;
  const beginText = itCanOverflow
    ? splittedText.slice(0, amountOfWords - 1).join(" ")
    : text;
  const endText = splittedText?.slice(amountOfWords - 1).join(" ");

  const handleKeyboard = (e) => {
    if (e.code === "Space" || e.code === "Enter") {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div className={styles.ServiceCard}>
      <img src={image} alt={title} height={40} width={40} />
      <h3>{title}</h3>
      <p id={id}>
        {beginText}
        {itCanOverflow && (
          <>
            {!isExpanded && <span>... </span>}
            {isExpanded && <span>{endText}</span>}
            <span
              className="text-violet-400 ml-2"
              role="button"
              tabIndex={0}
              aria-expanded={isExpanded}
              aria-controls={id}
              onKeyDown={handleKeyboard}
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? <p>show less</p> : <p>show more</p>}
            </span>
          </>
        )}
      </p>
    </div>
  );
}

export default Service;
