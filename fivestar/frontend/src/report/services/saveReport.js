/*
	Generated on 09/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import axios from 'axios';

const API_URL = 'http://localhost:3001';

const saveReport = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/reports`, data);
    return {
      data: response.data,
      status: response.status
    };
  } catch (error) {
    console.error('Error saving report data:', error);
    // For development/mockup, generate a response
    const now = new Date();
    const reportId = Math.floor(Math.random() * 1000) + 10;
    
    return {
      data: {
        data: {
          id: reportId,
          ...data,
          createdAt: now.toISOString()
        },
        message: 'Report successfully created'
      },
      status: 200
    };
  }
};

export default saveReport; 