import React from "react";
import logo from "../air.png";

const Home = () => {
  return (
    <div className="app__home">
      <img
        style={{ display: "block", maxWidth: "100%", margin: "0 auto" }}
        src={logo}
        alt="London AirQuality logo"
      />
    </div>
  );
};

export default Home;
