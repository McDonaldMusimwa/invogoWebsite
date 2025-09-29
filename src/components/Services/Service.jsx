
import styles from "./Service.module.css";
import PropTypes from "prop-types";

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

Service.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string
};

export default Service;
