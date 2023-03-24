import React from "react";
import Logo from "../assets/RefactorizeTypo.svg";
import "../styles.scss";

export default function Hero() {
  return (
    <div className="Header" id="Hero">
      <h1 className="glitch" data-text="refactorize();">
        {"refactorize();"}
      </h1>
      <p className="hero-subheading">
        31<sup>st</sup> March - 2<sup>nd</sup> April
      </p>
      <div>
        <a href="https://forms.gle/MzbmynedSCTQSBrh8" target="_blank">
          <button className="btn-sponsor">
            <span>Sponsor Us</span>
          </button>
        </a>
        <a href="https://forms.gle/MzbmynedSCTQSBrh8" target="_blank">
          <button className="btn-register">
            <span>Register</span>
          </button>
        </a>
      </div>
    </div>
  );
}
