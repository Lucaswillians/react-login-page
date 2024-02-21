import styles from "./Title.css";

export default function Title({ children }) {
  return (
    <div className={styles.Title}>
       {children}
    </div>
  );
}
