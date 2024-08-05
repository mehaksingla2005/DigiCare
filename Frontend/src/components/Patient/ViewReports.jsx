import React, { useState, useEffect } from 'react';

function ViewReports() {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulating an API call to fetch reports
    fetchReports();
  }, []);

  const fetchReports = async () => {
    try {
      // In a real application, you would make an API call here
      // For now, we'll use dummy data
      const dummyReports = [
        { id: 1, date: '2024-08-01', type: 'Blood Test', doctor: 'Dr. Smith' },
        { id: 2, date: '2024-07-15', type: 'X-Ray', doctor: 'Dr. Johnson' },
        { id: 3, date: '2024-06-30', type: 'General Checkup', doctor: 'Dr. Brown' },
      ];

      setReports(dummyReports);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch reports. Please try again later.');
      setLoading(false);
    }
  };

  const handleViewReport = (reportId) => {
    // Implement logic to view or download the report
    console.log(`Viewing report with ID: ${reportId}`);
  };

  if (loading) return <div>Loading reports...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="view-reports">
      <h3>Medical Reports</h3>
      {reports.length === 0 ? (
        <p>No reports available.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Type</th>
              <th>Doctor</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report) => (
              <tr key={report.id}>
                <td>{report.date}</td>
                <td>{report.type}</td>
                <td>{report.doctor}</td>
                <td>
                  <button onClick={() => handleViewReport(report.id)}>
                    View Report
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ViewReports;