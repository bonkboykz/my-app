import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Header } from "../components/Header/Header";

import "./DashboardLayout.css";
import { useSelector } from "react-redux";

export function DashboardLayout() {
  const theme = useSelector((state) => state.theme);

  return (
    <div className={`dashboard-layout ${theme.darkMode && "is-dark"}`}>
      <div>
        <Header />
      </div>

      <div className="dashboard-layout__content">
        <Sidebar />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
