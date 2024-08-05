import React from 'react';
import ViewReports from './ViewReports';

function PatientDashboard() {
  return (
    <div className="patient-dashboard">
      <h2>Patient Dashboard</h2>
      <p>Welcome, [Patient Name]</p>
      <p>Your Unique ID: [Unique ID]</p>
      <ViewReports />
    </div>
  );
}

export default PatientDashboard;