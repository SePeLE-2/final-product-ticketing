/*
	Generated on 09/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React from 'react';
import ArticleDetailPage from './containers/ArticleDetailPage'
import ListArticlePage from './containers/ListArticlePage'
import AddArticlePage from './containers/AddArticlePage'

const newsArticleRoutes = [
	{
		path: "/article",
		element: <ListArticlePage />,
	}


	,
	{
		path: "/article/create",
		element: <AddArticlePage />,
	}


	,
	{
		path: "/article/:articleId",
		element: <ArticleDetailPage />,
	}



]

export default newsArticleRoutes
