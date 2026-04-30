import React, { useState } from "react";
import TimeSlots from "./TimeSlots";

function BookingForm({ doctor, close }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Appointment booked with ${doctor.name} on ${date} at ${slot}`);
    close();
  };

  return (
    <div className="modal">
      <form className="form" onSubmit={handleSubmit}>
        <h3>Book with {doctor.name}</h3>

        <input
          type="text"
          placeholder="Patient Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <TimeSlots setSlot={setSlot} />

        <button type="submit">Confirm</button>
        <button type="button" onClick={close}>Cancel</button>
      </form>
    </div>
  );
}

export default BookingForm;