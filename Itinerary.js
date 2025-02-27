import React from "react";
import { itineraryData } from "../data";
import "../styles/Itinerary.css";

const Itinerary = () => (
  <div className="itinerary">
    {itineraryData.map((item, index) => (
      <div key={index} className="itinerary-day">
        <h3>{item.day}</h3>
        <p>{item.description}</p>
      </div>
    ))}
  </div>
);

export default Itinerary;
