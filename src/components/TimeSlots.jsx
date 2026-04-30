import React from "react";

const slots = ["10:00 AM", "11:00 AM", "1:00 PM", "3:00 PM"];

function TimeSlots({ setSlot }) {
  return (
    <div>
      <p>Select Time:</p>
      <div className="slots">
        {slots.map((s, index) => (
          <button key={index} onClick={() => setSlot(s)}>
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}

export default TimeSlots;