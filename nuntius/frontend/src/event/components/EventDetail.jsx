/*
	Generated on 09/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React from 'react';
import { Link } from "react-router";

import { useAuth } from '@/commons/auth';
import { Button, Detail, VisualizationAttr } from '@/commons/components';

import * as Layouts from "@/commons/layouts";

const EventDetail = ({ data, onGenerateSalesReport, onGenerateAttendanceReport }) => {
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
  
  return (
    <Layouts.DetailComponentLayout
      item={data}
      itemsAttrs={[
        {
          id: "name",
          condition: "",
          label: "Event Name",
          featureName: "name",
        },
        {
          id: "date",
          condition: "",
          label: "Event Date",
          featureName: "date",
          formatter: formatDate,
        },
        {
          id: "location",
          condition: "",
          label: "Location",
          featureName: "location",
        },
        {
          id: "description",
          condition: "",
          label: "Description",
          featureName: "description",
        },
        {
          id: "ticketsSold",
          condition: "",
          label: "Tickets Sold",
          featureName: "ticketsSold",
        },
        {
          id: "ticketPrice",
          condition: "",
          label: "Ticket Price",
          featureName: "ticketPrice",
          formatter: formatCurrency,
        },
        {
          id: "attendanceCount",
          condition: "",
          label: "Attendance Count",
          featureName: "attendanceCount",
        }
      ]}
      itemsEvents={[
        <Button 
          key="salesReport"
          variant="primary"
          className="mr-2 mt-4"
          onClick={() => onGenerateSalesReport(data.id)}
        >
          Generate Sales Report
        </Button>,
        <Button 
          key="attendanceReport"
          variant="secondary"
          className="mr-2 mt-4"
          onClick={() => onGenerateAttendanceReport(data.id)}
        >
          Generate Attendance Report
        </Button>,
        <Link to={`/event/fill-seat/${data.id}`} key="fillSeat">
          <Button 
            variant="secondary" 
            className="mr-2 mt-4"
          >
            Fill Seat
          </Button>
        </Link>,
        <Link to={`/event/rating/${data.id}`} key="rating">
          <Button 
            variant="secondary" 
            className="mt-4"
          >
            Rate Event
          </Button>
        </Link>
      ]}
      itemsModals={[]}
    />
  );
};

export default EventDetail; 