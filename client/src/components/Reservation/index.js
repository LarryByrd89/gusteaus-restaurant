import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function Reservation() {
  const [selectedDate, setSelectedDate] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [email, setEmail] = useState("");
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for form submission to server
  };
  return (
    <section className="container">
      <h1>Make a Reservation</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={handleFirstNameChange}
            required
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={handleLastNameChange}
            required
          />
        </div>
        <div>
          <label>Date:</label>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            minDate={new Date()}
            dateFormat="yyyy/MM/dd"
            placeholderText="Select a date"
            required
          />
        </div>
        <div>
          <label>Time:</label>
          <input
            type="time"
            value={selectedTime}
            onChange={handleTimeChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <button type="submit">Submit Reservation</button>
        </div>
      </form>
    </section>
  );
}
export default Reservation;
