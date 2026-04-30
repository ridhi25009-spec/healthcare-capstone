import React from "react";

function DoctorCard({ doctor, onBook }) {
  return (
    <div className="card">
      <h3>{doctor.name}</h3>
      <p>{doctor.specialization}</p>
      <button onClick={() => onBook(doctor)}>Book Appointment</button>
    </div>
  );
}

export default DoctorCard;