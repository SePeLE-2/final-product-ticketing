/*
  Generated on 09/05/2025 by UI Generator PRICES-IDE
  https://amanah.cs.ui.ac.id/research/ifml-regen
  version 3.9.0
*/
import axios from 'axios';

const API_URL = environment.rootApi;

const getEventData = async (eventId = null) => {
  try {
    let url = `${API_URL}/events`;
    if (eventId) {
      url = `${url}/${eventId}`;
    }

    const response = await axios.get(url);
    return {
      data: response.data,
      status: response.status
    };
  } catch (error) {
    console.error('Error fetching event data:', error);

    // Return mock data for development
    if (eventId) {
      return {
        data: {
          data: {
            id: eventId,
            name: 'Sample Event',
            date: '2025-06-01',
            location: 'Jakarta',
            description: 'This is a sample event for development purposes.'
          }
        },
        status: 200
      };
    }

    return {
      data: {
        data: [
          { id: 1, name: 'Concert', date: '2025-06-01', location: 'Jakarta' },
          { id: 2, name: 'Exhibition', date: '2025-06-15', location: 'Bandung' },
          { id: 3, name: 'Conference', date: '2025-07-01', location: 'Surabaya' }
        ]
      },
      status: 200
    };
  }
};

export default getEventData; 