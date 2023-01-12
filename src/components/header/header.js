import './header.css'

import {Link} from "react-router-dom";

import logo from '../../graphics/logo_black.png'

function Header() {
  return (
    <header className="header">
        
      <div class="flex">
        
        <div>
          <a href="/" className="logo">
            <img src={logo} alt="Will Sather" href="/" width="100" height="100"/>
          </a>
        </div>

        <ul class="nav_trans" id="nav_trans">
          <li>
            <Link to="/" Style="color:black">home</Link>
          </li>
          <li>
            <Link to="/experience" Style="color:black">experience</Link>
          </li>
          <li>
            <a class="white_link" href="https://byt8.app" target="_blank">byt8</a>
          </li>
          <li>
            <Link to="/about" Style="color:black">about</Link>
          </li>
        </ul>
      </div>

    </header>
  );
}

export default Header;
