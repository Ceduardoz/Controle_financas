import Sidebar from "./components/SideBar";
import Dashboard from "./pages/Dashoboard";

export default function App() {
  return (
    <div className="app-shell">
      <Sidebar />
      <Dashboard />
    </div>
  );
}
