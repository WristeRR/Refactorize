import React from "react";
import "./Sponsor.css";
import { sponsorsList } from "./sponsorsList.js";

export default function Sponsor() {
  return (
    <div className="sponsor" id="Sponsors">
      <h1 className="eventHeading">SPONSORS</h1>
      <div className="logosContainer">
        {sponsorsList.map((sponsor) => {
          return (
            <a target="_blank" rel="noreferrer" href={sponsor.href}>
              <img className="logo" src={sponsor.src} alt={sponsor.name} />
            </a>
          );
        })}
      </div>
    </div>
  );
}
