import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to={"/"} className={styles.title}>
        Myapp
      </Link>

      <div className={styles.menu}>
        <NavLink
          to={"/"}
          end
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          Home
        </NavLink>

        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          About
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
