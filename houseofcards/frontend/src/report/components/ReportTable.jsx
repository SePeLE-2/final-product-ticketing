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

const ReportTable = ({ reportData }) => {
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
    <>
      {reportData && reportData.length > 0 ? (
        reportData.map((report) => (
          <TableRow key={report.id} distinct={false}>
            <TableCell>{report.eventName}</TableCell>
            <TableCell>{formatDate(report.eventDate)}</TableCell>
            <TableCell>{formatDate(report.reportDate)}</TableCell>
            <TableCell>{report.type === 'sales' ? 'Sales Report' : 'Attendance Report'}</TableCell>
            <TableCell isHiddenMobile>
              <div className="flex btn-group gap-2">
                <Link to={`/report/${report.id}`}>
                  <Button variant="primary" size="sm">View Detail</Button>
                </Link>
              </div>
            </TableCell>
          </TableRow>
        ))
      ) : (
        <TableRow>
          <TableCell colSpan={5} className="text-center">
            No reports found
          </TableCell>
        </TableRow>
      )}
    </>
  );
};

export default ReportTable; 