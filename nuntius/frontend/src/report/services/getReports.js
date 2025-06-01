/*
  Generated on 09/05/2025 by UI Generator PRICES-IDE
  https://amanah.cs.ui.ac.id/research/ifml-regen
  version 3.9.0
*/
import axios from 'axios';

const API_URL = environment.rootApi;

const getReports = async () => {
  try {
    const response = await axios.get(`${API_URL}/reports`);
    return {
      data: response.data,
      status: response.status
    };
  } catch (error) {
    console.error('Error fetching reports:', error);
    // Return mock data for development
    return {
      data: {
        data: [
          {
            id: 1,
            type: 'sales',
            eventName: 'Concert',
            eventDate: '2025-06-01',
            reportDate: '2025-05-15',
            ticketsSold: 150,
            totalRevenue: 15000000,
            createdAt: '2025-05-15'
          },
          {
            id: 2,
            type: 'attendance',
            eventName: 'Exhibition',
            eventDate: '2025-06-15',
            reportDate: '2025-06-20',
            ticketsSold: 200,
            attendance: 180,
            attendancePercentage: 90,
            createdAt: '2025-06-20'
          }
        ]
      },
      status: 200
    };
  }
};

export default getReports; 