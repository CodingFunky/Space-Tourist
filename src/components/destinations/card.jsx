/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

import "./card.css";

export default function Card(props) {
  //   let badgeText;
  //   if (props.openSpots === 0) {
  //     badgeText = "SOLD OUT";
  //   } else if (props.location === "Online") {
  //     badgeText = "ONLINE";
  //   }
  return (
    <div className="card">
      <h1 className="cardName">{props.name}</h1>
      <p className="cardDes">
        {props.description}
        {props.name === "Mars" ? (
          <>
            <br />
            <br />
          </>
        ) : null}
      </p>
      <div className="cardFooter">
        <div className="distance">
          <span className="distanceTxt">AVG. DISTANCE </span>
          {props.distance}
        </div>
        <div className="travel">
          <span className="travelTxt">EST. TRAVEL TIME</span>
          {props.travel}
        </div>
      </div>
    </div>
  );
}
