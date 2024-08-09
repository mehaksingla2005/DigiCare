import React from 'react';
import ViewReports from './ViewReports';

function PatientDashboard() {
  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4 text-center text-blue-600">Patient Dashboard</h2>
        <p className="text-lg mb-2">Welcome, <span className="font-bold text-blue-500">[Patient Name]</span></p>
        <p className="text-lg mb-6">Your Unique ID: <span className="font-bold text-blue-500">[Unique ID]</span></p>
        <ViewReports />
      </div>
    </div>
  );
}

export default PatientDashboard;
