import React, { useState, useEffect } from 'react';
import appointmentService from '../services/appointmentService';

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    appointmentService.getAllAppointments().then((response) => {
      setAppointments(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Appointments</h2>
      <table>
        <thead>
          <tr>
            
            <th>Doctor Name</th>
            <th>Doctor Specialty</th>
            <th>Patient Name</th>
            <th>Appointment Date</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.id}>
              <td>{appointment.doctorName}</td>
              <td>{appointment.doctorSpecialty}</td>
              <td>{appointment.patientName}</td>
              <td>{new Date(appointment.appointmentDate).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentList;
