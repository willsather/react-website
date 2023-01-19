import './header.css'

import {Link} from "react-router-dom";

import logo from '../../graphics/logo_black.png'

function Header() {
  return (
    <header className="header">
        
      <div className="flex">
        
        <div>
          <a href="/" className="logo">
            <img src={logo} alt="Will Sather" href="/" width="100" height="100"/>
          </a>
        </div>

        <ul className="nav_trans" id="nav_trans">
          <li>
            <Link to="/" style={{color: "black"}}>home</Link>
          </li>
          <li>
            <Link to="/experience" style={{color: "black"}}>experience</Link>
          </li>
          <li>
            <a className="white_link" href="https://byt8.app" target="_blank" rel="noreferrer">byt8</a>
          </li>
          <li>
            <Link to="/about" style={{color: "black"}}>about</Link>
          </li>
        </ul>
      </div>

    </header>
  );
}

export default Header;
