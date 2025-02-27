import React, { useState } from "react";
import "../styles/BookingForm.css";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking request submitted!");
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" name="name" value={formData.name} onChange={handleChange} required />

      <label>Email:</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} required />

      <label>Message:</label>
      <textarea name="message" value={formData.message} onChange={handleChange} required />

      <button type="submit">Submit</button>
    </form>
  );
};

export default BookingForm;
