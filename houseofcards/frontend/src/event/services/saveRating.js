/*
	Generated on 09/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import axios from 'axios';

const API_URL = 'http://localhost:3001';

const saveRating = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/events/${data.eventId}/ratings`, data);
    return {
      data: response.data,
      status: response.status
    };
  } catch (error) {
    console.error('Error saving rating data:', error);
    throw error;
  }
};

export default saveRating; 