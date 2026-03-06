import styles from "./styles.module.css";

export default function DefaultButton({ children, ...props }) {
  return (
    <button type="button" className={styles.button} {...props}>
      {children}
    </button>
  );
}
