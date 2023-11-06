import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/api';



export const Login = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login/`, userData);

    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const Register = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register/`, userData);
    console.log("dodano użytkownika")
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUserDetails = async () => {
  try {
    // Pobierz token z localStorage
    const token = localStorage.getItem('token');

    if (!token) {
      // Brak tokenu, obsłuż błąd autoryzacji lub przekieruj na stronę logowania
      throw new Error('Brak tokenu autoryzacji');
    }

    // Ustaw nagłówek Authorization z tokenem
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    console.log(headers)
    const response = await axios.get(`${API_BASE_URL}/user/`, { headers });
    console.log(response)
    return response.data;
  } catch (error) {
    // Obsłuż błąd
    throw error;
  }
};

export const logoutUser = async () => {
  try {
    const response = await axios.post(`${API_BASE_URL}/logout/`);
    
    localStorage.removeItem("token")
    
    console.log("Wylogowano");
    return response.data;
  } catch (error) {
    throw error;
  }
};

  
  
  
  
  