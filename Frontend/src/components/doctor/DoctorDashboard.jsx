import React from 'react';
import PatientSearch from './PatientSearch';
import TreatmentForm from './TreatmentForm';

function DoctorDashboard() {
  return (
    <div className="doctor-dashboard">
      <h2>Doctor Dashboard</h2>
      <p>Welcome, Dr. [Doctor Name]</p>
      <PatientSearch />
      <TreatmentForm />
    </div>
  );
}

export default DoctorDashboard;