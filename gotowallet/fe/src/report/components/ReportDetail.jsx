/*
	Generated on 09/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React from 'react';
import { Link } from "react-router";

import { useAuth } from '@/commons/auth';
import { Button } from '@/commons/components';

import * as Layouts from "@/commons/layouts";

const ReportDetail = ({ report }) => {
  const { checkPermission } = useAuth();
  
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(amount);
  };
  
  const formatPercentage = (value) => {
    return `${value}%`;
  };
  
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6">
        {report.type === 'sales' ? 'Sales Report' : 'Attendance Report'}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="font-semibold text-gray-600">Event Details</h3>
          <div className="mt-2">
            <p><span className="font-medium">Event Name:</span> {report.eventName}</p>
            <p><span className="font-medium">Event Date:</span> {formatDate(report.eventDate)}</p>
            <p><span className="font-medium">Report Date:</span> {formatDate(report.reportDate)}</p>
          </div>
        </div>
        
        <div>
          <h3 className="font-semibold text-gray-600">Report Summary</h3>
          <div className="mt-2">
            <p><span className="font-medium">Tickets Sold:</span> {report.ticketsSold}</p>
            
            {report.type === 'sales' && (
              <p><span className="font-medium">Total Revenue:</span> {formatCurrency(report.totalRevenue)}</p>
            )}
            
            {report.type === 'attendance' && (
              <>
                <p><span className="font-medium">Attendance:</span> {report.attendance}</p>
                <p><span className="font-medium">Attendance Percentage:</span> {formatPercentage(report.attendancePercentage)}</p>
              </>
            )}
          </div>
        </div>
      </div>
      
      <div className="flex justify-between mt-8">
        <Link to="/report">
          <Button variant="secondary">Back to Reports</Button>
        </Link>
        
        <Button 
          variant="primary"
          onClick={() => window.print()}
        >
          Print Report
        </Button>
      </div>
    </div>
  );
};

export default ReportDetail; 