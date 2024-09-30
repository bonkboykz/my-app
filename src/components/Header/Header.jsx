import "./Header.css";
import { useDispatch, useSelector } from "react-redux";

import { logout } from "../../store/actions/auth";
import { useNavigate } from "react-router-dom";

export function Header({ className }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const vyitiOtsuda = () => {
    dispatch(logout());
    navigate("/auth/login");
  };

  const auth = useSelector((state) => state.auth);

  return (
    <div className={`header ${className}`}>
      <div className="header__left-part">
        <div className="header__logo">
          <img src="https://via.placeholder.com/200x100" alt="logo" />
        </div>
        <div className="header__search">
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <div>{auth.user.username}</div>
        {/* User profile round avatar */}
        <div className="header__profile">
          <img src="https://via.placeholder.com/64" alt="profile" />
        </div>
        <button type="submit" onClick={vyitiOtsuda}>
          Logout
        </button>
      </div>
    </div>
  );
}
