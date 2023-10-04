// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./destination.css";
import dataFile from "../../../data.json";
import Card from "./card.jsx";

const data = dataFile.destinations;

function Destination() {
  const [currentActiveTab, setActiveTab] = useState(data[0]);

  function handleTabClick(destinationName) {
    const selectedDestination = data.find(
      (dest) => dest.name === destinationName
    );
    setActiveTab(selectedDestination);
  }
  return (
    <div className="destinationContainer">
      <p className="destinationTitle">
        <span className="bold transparent">0 1</span> PICK YOUR DESTINATION
      </p>
      <section className="destinationHero">
        <img
          src={currentActiveTab.images.webp}
          alt={currentActiveTab.name}
          className="moonPic"
        />
        <div className="cardContainer">
          <div className="dNav">
            {data.map((dest) => (
              <p
                key={dest.name}
                className="btn dNav-btn"
                onClick={() => handleTabClick(dest.name)}
              >
                {dest.name}
              </p>
            ))}
          </div>
          <Card
            name={currentActiveTab.name}
            description={currentActiveTab.description}
            distance={currentActiveTab.distance}
            travel={currentActiveTab.travel}
          />
        </div>
      </section>
    </div>
  );
}

export default Destination;
