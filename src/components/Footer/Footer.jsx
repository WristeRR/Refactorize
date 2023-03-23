import React from "react";
import "./Footer.css";
import { Icon } from "@iconify/react";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

export default function Footer() {
  return (
    <BrowserRouter>
      <div className="footer">
        <div className="row1">
          <h1 className="title">RANDOMIZE();</h1>
          <div className="quickLinks">
            <Link to="#Hero" smooth>
              <span className="quickLink">Home</span>
            </Link>
            <Link to="#About" smooth>
              <span className="quickLink">About</span>
            </Link>
            <Link to="#Events" smooth>
              <span className="quickLink">Events</span>
            </Link>
            <Link to="#Sponsors" smooth>
              <span className="quickLink">Sponsors</span>
            </Link>
          </div>
        </div>
        <div className="socials">
          <a href="https://github.com/randomizemuj">
            <Icon
              className="socialGithub"
              icon="mdi:github"
              width="40"
              height="40"
            />
          </a>

          <a href="https://www.instagram.com/randomizemuj/">
            <Icon
              className="socialInsta"
              icon="fa6-brands:instagram"
              width="40"
              height="40"
            />
          </a>

          <a href="https://www.linkedin.com/company/randomizemuj/mycompany/">
            <Icon
              className="socialLinkedIn"
              icon="fa6-brands:linkedin-in"
              width="40"
              height="40"
            />
          </a>

          <a href="https://discord.com/invite/N6KQjXEJbC">
            <Icon
              className="socialDiscord"
              icon="fa6-brands:discord"
              width="40"
              height="40"
            />
          </a>
        </div>
      </div>
    </BrowserRouter>
  );
}
