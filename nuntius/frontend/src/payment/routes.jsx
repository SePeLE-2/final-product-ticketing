/*
	Generated on 09/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React from 'react';
import PaymentDetailPage from './containers/PaymentDetailPage'
import ListPaymentPage from './containers/ListPaymentPage'
import AddPaymentPage from './containers/AddPaymentPage'

const paymentRoutes = [
	{
		path: "/payment",
		element: <ListPaymentPage />,
	}


	,
	{
		path: "/payment/create",
		element: <AddPaymentPage />,
	}


	,
	{
		path: "/payment/:paymentId",
		element: <PaymentDetailPage />,
	}



]

export default paymentRoutes