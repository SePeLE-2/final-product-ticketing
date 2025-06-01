/*
	Generated on 09/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React from 'react';
import Event from './containers/Event'
import AddEvent from './containers/AddEvent'
import AddRating from './containers/AddRating'
import FillSeat from './containers/FillSeat'
import EventDetail from './containers/EventDetail'

const eventRoutes = [
{ 
	path: "/event",
	element: <Event />,
},
{ 
	path: "/event/add",
	element: <AddEvent />,
},
{ 
	path: "/event/:eventId",
	element: <EventDetail />,
},
{ 
	path: "/event/rating/:eventId",
	element: <AddRating />,
},
{ 
	path: "/event/fill-seat/:eventId",
	element: <FillSeat />,
}
]

export default eventRoutes
