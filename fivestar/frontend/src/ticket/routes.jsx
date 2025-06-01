/*
	Generated on 09/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React from 'react';
import TicketList from './containers/TicketList'
import AddTicket from './containers/AddTicket'
import TicketDetail from './containers/TicketDetail'

const ticketRoutes = [
{ 
	path: "/ticket",
	element: <TicketList />,
},
{ 
	path: "/ticket/add",
	element: <AddTicket />,
},
{ 
	path: "/ticket/:ticketId",
	element: <TicketDetail />,
}
]

export default ticketRoutes 