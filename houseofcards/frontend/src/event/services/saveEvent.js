/*
  Generated on 09/05/2025 by UI Generator PRICES-IDE
  https://amanah.cs.ui.ac.id/research/ifml-regen
  version 3.9.0
*/
import axios from 'axios';

const API_URL = environment.rootApi;

const saveEvent = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/events`, data);
    return {
      data: response.data,
      status: response.status
    };
  } catch (error) {
    console.error('Error saving event data:', error);
    throw error;
  }
};

export default saveEvent; 