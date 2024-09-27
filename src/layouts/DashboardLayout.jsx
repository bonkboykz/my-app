import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Header } from "../components/Header/Header";

import "./DashboardLayout.css";

export function DashboardLayout() {
  return (
    <div className="dashboard-layout">
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
