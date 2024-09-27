import "./Header.css";

export function Header({ className }) {
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

      {/* User profile round avatar */}
      <div className="header__profile">
        <img src="https://via.placeholder.com/150" alt="profile" />
      </div>
    </div>
  );
}
