import type { User } from "../types";
import styles from "./UserCard.module.css";

const UserCard = ({ user }: { user: User | null }) => {
  if (!user) {
    return <p>User tidak ditemukan</p>;
  }

  return (
    <div>
      {user.role === "admin" ? (
        <span className={styles.badgeAdmin}>Admin</span>
      ) : (
        <span className={styles.badgeUser}>User</span>
      )}
      {user.role === "admin" && <button>Kelola Users</button>}
    </div>
  );
};

export default UserCard;
