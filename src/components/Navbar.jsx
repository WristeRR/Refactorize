import React from "react";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

export default function Nav() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        {/* <div className='void'> */}
        {/* </div> */}
        <div className="nav-items">
          <Link className="nav-link" to="#Hero" smooth>
            <span>Home</span>
          </Link>
          <Link className="nav-link" to="#About" smooth>
            <span>About</span>
          </Link>
          <Link className="nav-link" to="#Events" smooth>
            <span>Events</span>
          </Link>
          <Link className="nav-link" to="#Sponsors" smooth>
            <span>Sponsors</span>
          </Link>
          <a href="https://www.randomizemuj.com/team" className="nav-link" target="_blank">
            <span>Team</span>
          </a>
        </div>
      </nav>
    </BrowserRouter>
  );
}
