/*
	Generated on 09/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React from 'react';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams";

import { useAuth } from '@/commons/auth';
import { Button, Modal, Spinner, TableRow, TableCell } from '@/commons/components';

import * as Layouts from "@/commons/layouts";

const TicketTable = ({ ticketData }) => {
  const { checkPermission } = useAuth();
  console.log("INI DI TICKETTABLE", ticketData)
  
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(amount);
  };
  
  return (
    <table className="table w-full">
      <thead>
        <tr>
          <th>Event Name</th>
          <th>Ticket Name</th>
          <th>Price</th>
          <th>Availability</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {ticketData && ticketData.length > 0 ? (
          ticketData.map((ticket) => (
            <tr key={ticket.id}>
              <td>{ticket.eventName}</td>
              <td>{ticket.ticketName}</td>
              <td>{formatCurrency(ticket.price)}</td>
              <td>{ticket.availability ? "Available" : "Sold Out"}</td>
              <td>
                <div className="flex btn-group gap-2 flex-wrap">
                  <Link to={`/ticket/${ticket.id}`}>
                    <Button variant="primary" size="sm">Detail</Button>
                  </Link>
                </div>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={5} className="text-center">No tickets found</td>
          </tr>
        )}
      </tbody>
    </table>
  );  
};

export default TicketTable; 