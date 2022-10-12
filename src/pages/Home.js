import React from "react";
import HomeDetalis from "./details/homeDetalis";
import "./home.css";

function Home() {
  return (
    <div>
      <h1>Home page Like you here</h1>
      <div className="home">
        <img
          src="https://media.istockphoto.com/photos/paperless-workplace-idea-esigning-electronic-signature-document-an-picture-id1349390515?b=1&k=20&m=1349390515&s=170667a&w=0&h=d9eagqJMGdGExzPlpxp1UdhHi23NJTubYzKB4zPTs_s="
          alt="image1"
        />
        <HomeDetalis className="homedetails" />
      </div>
    </div>
  );
}

export default Home;
