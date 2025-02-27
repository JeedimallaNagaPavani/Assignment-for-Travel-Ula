import React from "react";
import { inclusionsData } from "../data";
import "./Inclusions.css";

const Inclusions = () => (
  <div className="inclusions">
    <h2>Package Inclusions</h2>
    <ul>
      {inclusionsData.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

export default Inclusions;
