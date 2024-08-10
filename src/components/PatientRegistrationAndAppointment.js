import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const PatientRegistrationAndAppointment = () => {
  const [patientName, setPatientName] = useState('');
  const [patientAge, setPatientAge] = useState('');
  const [patientAilment, setPatientAilment] = useState('');
  const [doctorId, setDoctorId] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');

  const isWeekend = (date) => {
    const day = new Date(date).getDay();
    return day === 6 || day === 0;  // 6 = Saturday, 0 = Sunday
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isWeekend(appointmentDate)) {
      alert("Appointments cannot be scheduled on weekends.");
      return;
    }

    const patientData = {
      name: patientName,
      age: patientAge,
      ailment: patientAilment,
      doctorId: doctorId 
    };

    try {
      const patientResponse = await axios.post('http://localhost:8080/api/patients', patientData);
      const appointmentData = {
        patientId: patientResponse.data.id,
        doctorId: doctorId,
        appointmentDate: appointmentDate,
      };

      await axios.post('http://localhost:8080/api/appointments', appointmentData);
      alert('Patient registered and appointment created successfully!');
      
      // Reset form fields
      setPatientName('');
      setPatientAge('');
      setPatientAilment('');
      setDoctorId('');
      setAppointmentDate('');
      
    } catch (error) {
      if (error.response && error.response.status === 409) {
        alert('Appointment conflict: An appointment already exists at the same time or on the weekend.');
      } else {
        console.error('There was an error registering the patient or creating the appointment!', error);
        alert('An error occurred. Please try again.');
      }
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2>Register Patient and Make Appointment</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="patientName">
              <Form.Label>Patient Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter patient name"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="patientAge">
              <Form.Label>Patient Age</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter patient age"
                value={patientAge}
                onChange={(e) => setPatientAge(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="patientAilment">
              <Form.Label>Patient Ailment</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter patient ailment"
                value={patientAilment}
                onChange={(e) => setPatientAilment(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="doctorId">
              <Form.Label>Doctor ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter doctor ID"
                value={doctorId}
                onChange={(e) => setDoctorId(e.target.value)} 
                required
              />
            </Form.Group>

            <Form.Group controlId="appointmentDate">
              <Form.Label>Appointment Date</Form.Label>
              <Form.Control
                type="datetime-local"
                value={appointmentDate}
                onChange={(e) => setAppointmentDate(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Register and Make Appointment
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default PatientRegistrationAndAppointment;
