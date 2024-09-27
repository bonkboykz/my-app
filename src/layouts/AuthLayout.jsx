import { Outlet } from "react-router-dom";

import "./AuthLayout.css";

export function AuthLayout() {
  return (
    <>
      <main>
        <div className="welcome-message">
          <h1>Welcome to the platform!</h1>
        </div>

        <Outlet />
      </main>
    </>
  );
}
