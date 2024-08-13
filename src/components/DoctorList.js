import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/doctors');
        console.log("Fetched Doctors:", response.data);  // Log the fetched doctors
        setDoctors(response.data);
      } catch (error) {
        console.error('There was an error fetching the doctors!', error);
      }
    };
  
    fetchDoctors();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
       <br></br>
      <table style={{ width: '100%', borderCollapse: 'collapse', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
        <thead>
          <tr style={{ backgroundColor: '#4a4a4a', color: '#fff', textAlign: 'left' }}>
            <th style={{ padding: '12px', borderBottom: '2px solid #ccc' }}>ID</th>
            <th style={{ padding: '12px', borderBottom: '2px solid #ccc' }}>Name</th>
            <th style={{ padding: '12px', borderBottom: '2px solid #ccc' }}>Specialty</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor) => (
            <tr key={doctor.id} style={{ backgroundColor: doctor.id % 2 === 0 ? '#f2f2f2' : '#ffffff' }}>
              <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>{doctor.id}</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>{doctor.doctorName}</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>{doctor.specialty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DoctorList;
