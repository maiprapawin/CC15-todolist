import "./Header.scss";
import { FaHome, FaSearch } from "react-icons/fa";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <FaHome />
      </div>
      <div className="header__text">
        <h1>TodoList</h1>
      </div>
      <div className="header__search">
        <div className="search">
          <span className="search__icon">
            <FaSearch />
          </span>
          <input type="text" placeholder="search" className="search__input" />
        </div>
      </div>
    </header>
  );
}

export default Header;
