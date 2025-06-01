/*
	Generated on 09/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React from 'react';
import ListCommentPage from './containers/ListCommentPage'
import AddCommentPage from './containers/AddCommentPage'

const commentRoutes = [
{ 
	path: "/article/:articleId/comment",
	element: <ListCommentPage />,
}

	
,
{ 
	path: "/article/:articleId/comment/create",
	element: <AddCommentPage />,
}

	

]

export default commentRoutes
