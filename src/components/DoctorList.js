import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/doctors').then((response) => {
      setDoctors(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Doctors</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Specialty</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor) => (
            <tr key={doctor.id}>
              <td>{doctor.id}</td>
              <td>{doctor.name}</td>
              <td>{doctor.specialty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DoctorList;
