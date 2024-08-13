import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

const Navigation = () => {
  const [activeLink, setActiveLink] = useState(''); // State to track the active link

  const handleNavClick = (link) => {
    setActiveLink(link); // Update the active link state
  };

  return (
    <Navbar style={{ backgroundColor: '#343a40', padding: '10px 20px' }} expand="lg">
      <Navbar.Brand href="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#ffffff' }}>My App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link 
            as={Link} 
            to="/doctors" 
            style={{ 
              color: activeLink === 'doctors' ? '#ffdd57' : '#ffffff', 
              margin: '0 10px' 
            }} 
            onClick={() => handleNavClick('doctors')}
          >
            Doctors
          </Nav.Link>
          <Nav.Link 
            as={Link} 
            to="/patients" 
            style={{ 
              color: activeLink === 'patients' ? '#ffdd57' : '#ffffff', 
              margin: '0 10px' 
            }} 
            onClick={() => handleNavClick('patients')}
          >
            Patients
          </Nav.Link>
          <Nav.Link 
            as={Link} 
            to="/appointments" 
            style={{ 
              color: activeLink === 'appointments' ? '#ffdd57' : '#ffffff', 
              margin: '0 10px' 
            }} 
            onClick={() => handleNavClick('appointments')}
          >
            Appointments
          </Nav.Link>
          <Nav.Link 
            as={Link} 
            to="/register-appointment" 
            style={{ 
              color: activeLink === 'register-appointment' ? '#ffdd57' : '#ffffff', 
              margin: '0 10px' 
            }} 
            onClick={() => handleNavClick('register-appointment')}
          >
            Register & Make Appointment
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
