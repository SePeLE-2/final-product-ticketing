/*
	Generated on 09/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React from 'react';
import ReportList from './containers/ReportList';
import ReportDetail from './containers/ReportDetail';

const reportRoutes = [
    {
        path: "/report",
        element: <ReportList />
    },
    {
        path: "/report/:reportId",
        element: <ReportDetail />
    }
]

export default reportRoutes
