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

const EventTable = ({ eventData, onGenerateSalesReport, onGenerateAttendanceReport }) => {
  const { checkPermission } = useAuth();
  
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  return (
    <>
      {eventData && eventData.length > 0 ? (
        eventData.map((event) => (
          <TableRow key={event.id} distinct={false}>
            <TableCell>{event.name}</TableCell>
            <TableCell>{formatDate(event.date)}</TableCell>
            <TableCell>{event.location}</TableCell>
            <TableCell isHiddenMobile>
              <div className="flex btn-group gap-2 flex-wrap">
                <Link to={`/event/${event.id}`}>
                  <Button variant="primary" size="sm">Detail</Button>
                </Link>
                <Link to={`/event/fill-seat/${event.id}`}>
                  <Button variant="secondary" size="sm">Fill Seat</Button>
                </Link>
                <Link to={`/event/rating/${event.id}`}>
                  <Button variant="secondary" size="sm">Rate</Button>
                </Link>
                <div className="dropdown dropdown-end">
                  <label tabIndex={0} className="btn btn-sm">
                    Reports
                  </label>
                  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                      <button onClick={() => onGenerateSalesReport(event.id)}>
                        Generate Sales Report
                      </button>
                    </li>
                    <li>
                      <button onClick={() => onGenerateAttendanceReport(event.id)}>
                        Generate Attendance Report
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </TableCell>
          </TableRow>
        ))
      ) : (
        <TableRow>
          <TableCell colSpan={4} className="text-center">
            No events found
          </TableCell>
        </TableRow>
      )}
    </>
  );
};

export default EventTable;
