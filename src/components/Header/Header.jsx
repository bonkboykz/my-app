import "./Header.css";
import { useDispatch } from "react-redux";

import { logout } from "../../store/actions/auth";
import { useNavigate } from "react-router-dom";

export function Header({ className }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const vyitiOtsuda = () => {
    dispatch(logout());
    navigate("/auth/login");
  };

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

      <div>
        {/* User profile round avatar */}
        <div className="header__profile">
          <img src="https://via.placeholder.com/150" alt="profile" />
        </div>
        <button type="submit" onClick={vyitiOtsuda}>
          Logout
        </button>
      </div>
    </div>
  );
}
