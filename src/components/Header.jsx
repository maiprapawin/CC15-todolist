import "./Header.scss";
import { FaHome } from "react-icons/fa";
import Search from "./Search"; // ใช้ชื่อเดียวกันกับที่เราตั้งไว้ใน export หรือจะตั้งชื่ออื่นก็ได้ ตรงคำว่า Search

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
        <Search />
      </div>
    </header>
  );
}

export default Header;
