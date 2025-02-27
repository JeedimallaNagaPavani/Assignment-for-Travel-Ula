import React from "react";
import { faqData } from "../data";
import "./FAQ.css";

const FAQ = () => (
  <div className="faq">
    <h2>Frequently Asked Questions</h2>
    {faqData.map((faq, index) => (
      <div key={index} className="faq-item">
        <h3>{faq.question}</h3>
        <p>{faq.answer}</p>
      </div>
    ))}
  </div>
);

export default FAQ;
