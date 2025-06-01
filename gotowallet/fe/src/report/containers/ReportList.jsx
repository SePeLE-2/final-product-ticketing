/*
	Generated on 09/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React, { useEffect, useState, useContext } from 'react';
import { Button, Spinner } from "@/commons/components";
import * as Layouts from '@/commons/layouts';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams";
import { HeaderContext } from "@/commons/components";
import { useAuth } from '@/commons/auth';
import ReportTable from "../components/ReportTable";

import getReports from '../services/getReports';

const ReportList = props => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState({
    listReport: false,
  });
  const { setTitle } = useContext(HeaderContext);

  const [reportData, setReportData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(prev => ({...prev, listReport: true}));
        const { data: reportData } = await getReports();
        setReportData(reportData.data);
      } finally {
        setIsLoading(prev => ({...prev, listReport: false}));
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setTitle("Reports");
  }, [setTitle]);
  
  const handleBackToEvents = () => {
    navigate("/event");
  };

  return (
    <Layouts.ViewContainerLayout
      buttons={
        <>
          <Layouts.ViewContainerButtonLayout>
            <Link to="/event">
              <Button className="p-2" variant="secondary">
                Kembali
              </Button>
            </Link>
          </Layouts.ViewContainerButtonLayout>
        </>
      }
    >
      {reportData?.length === 0 && !isLoading.listReport && (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                No reports found. Reports can be generated from the Event page.
              </p>
            </div>
          </div>
        </div>
      )}
      
      <Layouts.ListContainerTableLayout
        title={"List Report"}
        singularName={"Report"}
        items={reportData || []}
        isLoading={isLoading.listReport}
        tableHeaders={[
          { label: 'Event Name', key: 'eventName' },
          { label: 'Event Date', key: 'eventDate' },
          { label: 'Report Date', key: 'reportDate' },
          { label: 'Report Type', key: 'type' },
          { label: 'Actions', key: 'actions' }
        ]}
      >
        <ReportTable
          reportData={reportData}
        />
      </Layouts.ListContainerTableLayout>
    </Layouts.ViewContainerLayout>
  );
};

export default ReportList; 