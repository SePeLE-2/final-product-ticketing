/*
	Generated on 09/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React, { useEffect, useState, useContext } from 'react';
import { Button, Spinner } from "@/commons/components";
import * as Layouts from '@/commons/layouts';
import { useParams } from "@/commons/hooks/useParams";
import { HeaderContext } from "@/commons/components";
import { useAuth } from '@/commons/auth';

import ReportDetailComponent from "../components/ReportDetail";
import getReportDetail from '../services/getReportDetail';

const ReportDetail = props => {
  const { checkPermission } = useAuth();
  const { reportId } = useParams();
  
  const [isLoading, setIsLoading] = useState(false);
  const { setTitle } = useContext(HeaderContext);
  const [report, setReport] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const { data: reportData } = await getReportDetail(reportId);
        setReport(reportData.data);
      } finally {
        setIsLoading(false);
      }
    };
    
    if (reportId) {
      fetchData();
    }
  }, [reportId]);

  useEffect(() => {
    setTitle("Report Detail");
  }, [setTitle]);

  if (isLoading) {
    return <Spinner />;
  }
  
  if (!report) {
    return (
      <div className="text-center p-8">
        <h2 className="text-xl font-bold">Report not found</h2>
      </div>
    );
  }

  return (
    <Layouts.ViewContainerLayout>
      <Layouts.DetailContainerLayout title={report.type === 'sales' ? 'Sales Report Detail' : 'Attendance Report Detail'}>
        <ReportDetailComponent report={report} />
      </Layouts.DetailContainerLayout>
    </Layouts.ViewContainerLayout>
  );
};

export default ReportDetail; 