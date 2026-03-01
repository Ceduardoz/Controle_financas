import styles from "./styles.module.css";
import Sidebar from "../../components/SideBar";

export default function MainTemplate({ children }) {
  return (
    <div className={styles.appShell}>
      <Sidebar />
      <main className={styles.main}>{children}</main>
    </div>
  );
}
