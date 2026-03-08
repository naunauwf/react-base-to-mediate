import type { CardProps } from "../types";
import styles from "./Card.module.css";

const Card = ({ title, description, image, href }: CardProps) => {
  return (
    <div className={styles.card}>
      {image && <img src={image} alt={title} className={styles.image} />}

      <div className={styles.body}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        {href && (
          <a href={href} className={styles.link}>
            Selengkapnya
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
