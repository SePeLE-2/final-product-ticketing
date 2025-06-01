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

const TicketDetail = ({ data }) => {
  const { checkPermission } = useAuth();
  
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
          id: "eventName",
          condition: "",
          label: "Event Name",
          featureName: "eventName",
        },
        {
          id: "ticketName",
          condition: "",
          label: "Ticket Name",
          featureName: "ticketName",
        },
        {
          id: "price",
          condition: "",
          label: "Price",
          featureName: "price",
          formatter: formatCurrency,
        },
        {
          id: "availability",
          condition: "",
          label: "Availability",
          featureName: "availability",
          formatter: (value) => value ? "Available" : "Sold Out",
        }
      ]}
      itemsEvents={[]}
      itemsModals={[]}
    />
  );
};

export default TicketDetail; 