import styles from "./styles.module.css";

export default function SideBar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <span>Controle Financeiro</span>
      </div>

      <nav className={styles.menu}>
        <a href="#">Dashboard</a>
        <a href="#">Transações</a>
        <a href="#">Categorias</a>
        <a href="#">Relatórios</a>
      </nav>
    </aside>
  );
}
