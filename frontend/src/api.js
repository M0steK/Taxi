import axios from 'axios';

// Ustawienie domyślnego adresu backendu
const API_BASE_URL = 'http://localhost:5000';

// Funkcja, która pobiera dane z backendu
export const fetchBackendMessage = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/`);
    return response.data;
  } catch (error) {
    console.error('Błąd podczas pobierania danych z backendu:', error);
    return null;
  }
};