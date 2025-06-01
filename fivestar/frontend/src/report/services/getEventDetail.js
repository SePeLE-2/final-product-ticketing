/*
  Generated on 09/05/2025 by UI Generator PRICES-IDE
  https://amanah.cs.ui.ac.id/research/ifml-regen
  version 3.9.0
*/
import axios from 'axios';

const API_URL = environment.rootApi;

const getEventDetail = async (eventId) => {
  try {
    const response = await axios.get(`${API_URL}/events/${eventId}`);
    return {
      data: response.data,
      status: response.status
    };
  } catch (error) {
    console.error('Error fetching event detail:', error);
    // Return mock data for development
    return {
      data: {
        data: {
          id: eventId,
          name: 'Sample Event',
          date: '2025-06-01',
          location: 'Jakarta',
          description: 'This is a sample event for development purposes.',
          ticketsSold: 150,
          attendanceCount: 130,
          ticketPrice: 100000
        }
      },
      status: 200
    };
  }
};

export default getEventDetail; 