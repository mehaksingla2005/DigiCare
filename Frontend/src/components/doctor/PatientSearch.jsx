import React, { useState } from 'react';

function PatientSearch() {
  const [patientId, setPatientId] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle patient search logic here
    console.log('Searching for patient with ID:', patientId);
  };

  return (
    <div className="patient-search">
      <h3>Search Patient</h3>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter Patient ID"
          value={patientId}
          onChange={(e) => setPatientId(e.target.value)}
          required
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default PatientSearch;