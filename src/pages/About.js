import React from "react";
import AboutDetails from "./details/aboutDetails";
import "./about.css";

function About() {
  return (
    <React.Fragment>
      <h1>About Page</h1>
      <div className="aboutcontent">
        <img
          src=" https://media.istockphoto.com/photos/businessman-trading-online-stock-market-on-teblet-screen-digital-picture-id1311598658?b=1&k=20&m=1311598658&s=170667a&w=0&h=Ln_dpeXRkCDCZjuqOe2r7AlWP29xHFbc9wyKzxajloA="
          alt="About"
        />
        <AboutDetails />
      </div>
    </React.Fragment>
  );
}

export default About;
