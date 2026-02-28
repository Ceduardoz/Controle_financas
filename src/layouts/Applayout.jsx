import styles from "./AppLayout.module.css";
import Sidebar from "../components/SideBar";

export default function AppLayout() {
  return (
    <div className={styles.appShell}>
      <Sidebar />
      <main style={{ padding: 24 }}></main>
    </div>
  );
}
