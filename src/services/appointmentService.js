import axios from 'axios';

const API_URL = 'http://localhost:8080/api/appointments';

const createAppointment = (appointment) => {
  return axios.post(API_URL, appointment);
};

const getAllAppointments = () => {
  return axios.get(API_URL);
};

const getAppointmentById = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

const updateAppointment = (id, appointment) => {
  return axios.put(`${API_URL}/${id}`, appointment);
};

const deleteAppointment = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};

export default {
  createAppointment,
  getAllAppointments,
  getAppointmentById,
  updateAppointment,
  deleteAppointment
};
