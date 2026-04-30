import React, { useState } from "react";
import DoctorCard from "./DoctorCard";
import BookingForm from "./BookingForm";

const doctorsData = [
  { id: 1, name: "Dr. Sharma", specialization: "Cardiologist" },
  { id: 2, name: "Dr. Mehta", specialization: "Dentist" },
  { id: 3, name: "Dr. Verma", specialization: "Dermatologist" }
];

function DoctorList() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  return (
    <div>
      <h2>👨‍⚕️ Doctors</h2>

      <div className="doctor-list">
        {doctorsData.map((doc) => (
          <DoctorCard key={doc.id} doctor={doc} onBook={setSelectedDoctor} />
        ))}
      </div>

      {selectedDoctor && (
        <BookingForm doctor={selectedDoctor} close={() => setSelectedDoctor(null)} />
      )}
    </div>
  );
}

export default DoctorList;