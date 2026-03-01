import styles from "./styles.module.css";

export default function GraphCard({ title, children }) {
  return (
    <section className={styles.cardGraphs}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
