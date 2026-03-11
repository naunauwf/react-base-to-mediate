import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.code}>404</h1>
      <p className={styles.message}>Halaman tidak ditemukan</p>
      <Link to={"/"} className={styles.link}>
        Kembali ke Home
      </Link>
    </div>
  );
};

export default NotFound;
