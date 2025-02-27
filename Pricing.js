import React from "react";
import { pricingData } from "../data";
import "../styles/Pricing.css";

const Pricing = () => (
  <div className="pricing">
    <h3>Standard Pricing</h3>
    <p>Adult: ${pricingData.adult}</p>
    <p>Child (4-9 years): ${pricingData.child}</p>

    <h3>Special Independence Day Offer (Before Aug 14, 2023)</h3>
    <p>Adult: ${pricingData.discountAdult}</p>
    <p>Child: ${pricingData.discountChild}</p>
  </div>
);

export default Pricing;
