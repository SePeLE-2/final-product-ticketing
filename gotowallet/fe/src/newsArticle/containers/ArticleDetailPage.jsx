/*
	Generated on 09/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"

import ArticleDetail from '../components/ArticleDetail'
import getArticle from '../services/getArticle'
const ArticleDetailPage = props => {
const { articleId } = useParams()

	const [isLoading, setIsLoading] = useState({
	articleDetail: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [article, setArticle] = useState()
useEffect(() => {
	const fetchData = async () => {
		try {
			setIsLoading(prev => ({...prev, articleDetail: true}))
			const { data: article } = await getArticle({ articleId })
			setArticle(article.data)
		} finally {
			setIsLoading(prev => ({...prev, articleDetail: false}))
		}
	}
	fetchData()
}, [])

	
	useEffect(() => {
		setTitle("Article Detail Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerBackButtonLayout>
			  	<Link to={`/article
			  	`}>
			  		<Button className="p-4 w-full" variant="secondary">
			  		  Kembali
			  		</Button>
			  	</Link>
			  	
			  	
			  </Layouts.ViewContainerBackButtonLayout>
			  	
			  <Layouts.ViewContainerButtonLayout>
			  	<Link to={`/article/${articleId}/comment
			  	`}>
			  		<Button className="p-2 w-full" variant="primary">
			  		  Komentar
			  		</Button>
			  	</Link>
			  	
			  	
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.DetailContainerLayout
	title={"Article Detail"}
	singularName={"Detail"}
	items={{...article}}
	isLoading={isLoading.articleDetail}
	isCorrelatedWithAnotherComponent={false}
>
	<ArticleDetail {...{ data : { ...article }}} />
</Layouts.DetailContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default ArticleDetailPage

