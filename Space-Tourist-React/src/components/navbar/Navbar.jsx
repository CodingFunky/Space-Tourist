import { Link } from "react-router-dom";
import "./style.css";
import logo from "../../../assets/shared/logo.svg";
import burger from "../../../assets/shared/icon-hamburger.svg";
import { useState } from "react";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    console.log(menuOpen);
    return setMenuOpen(!menuOpen);
  };
  return (
    <header className="navbar">
      <div className="img-container">
        <img src={logo} alt="Logo" />
      </div>
      <div className="burger">
        <img src={burger} alt="Burger-menu" onClick={toggleMenu}/>
      </div>
      <div className="line"></div>
        <nav className={menuOpen?"content":"responsive-content"}>
          <Link to="/" style={{display:"flex"}}>
            {" "}
            <span className="number">00</span> Home
          </Link>
          <Link to="/destination" style={{display:"flex"}}>
            <span className="number">01</span> Destination
          </Link>
          <Link to="/crew" style={{display:"flex"}}>
            <span className="number">02</span>Crew
          </Link>
          <Link to="technology" style={{display:"flex"}}>
            <span className="number">03</span>Technology
          </Link>
        </nav>
    </header>
  );
}

export default Navbar;
