import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppointmentList from './components/AppointmentList';

import DoctorList from './components/DoctorList';
import PatientList from './components/PatientList';
import PatientRegistrationAndAppointment from './components/PatientRegistrationAndAppointment'; // Import the new component
import Navigation from './components/Navigation'; // Assuming you have a Navigation component
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/appointments" element={<AppointmentList />} />
          
          <Route path="/doctors" element={<DoctorList />} />
          <Route path="/patients" element={<PatientList />} />
          <Route path="/register-appointment" element={<PatientRegistrationAndAppointment />} /> {/* New route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
