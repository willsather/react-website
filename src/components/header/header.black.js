import './header.black.css'

import {Link} from "react-router-dom";

import logo from '../../graphics/logo_white.png'

function HeaderBlack() {
  return (
    <header className="header_black">

      <div className="flex">
          
          <div>
              <a href="/" className="logo_white">
                <img src={logo} alt="Will Sather" href="/" width="100" height="100"/>
              </a>
          </div>

          <ul className="nav_white" id="nav_white">
            <li>
              <Link to="/" style={{color: "white"}}>home</Link>
            </li>
            <li>
              <Link to="/experience" style={{color: "white"}}>experience</Link>
            </li>
            <li>
              <a className="black_link" href="https://byt8.app" target="_blank" rel="noreferrer">byt8</a>
            </li>
            <li>
              <Link to="/about" style={{color: "white"}}>about</Link>
            </li>
          </ul>
          
      </div>
    </header>
  );
}

export default HeaderBlack;