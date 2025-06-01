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
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import ArticleCard from "../components/ArticleCard";

import getListArticle from '../services/getListArticle'
const ListArticlePage = props => {
const { checkPermission } = useAuth();

const [isLoading, setIsLoading] = useState({
	listArticle: false,});
const { setTitle } = useContext(HeaderContext);

const [listArticle, setListArticle] = useState();
	
	useEffect(() => {
		

		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, listArticle: true}))
				const { data: listArticle } = await getListArticle()
				setListArticle(listArticle.data)
			} finally {
				setIsLoading(prev => ({...prev, listArticle: false}))
			}
		}
		fetchData()
  	}, [])

	
	useEffect(() => {
		setTitle("List Article Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/article/create
			  	`}>
			  		<Button className="p-2" variant="primary">
			  		  Tambah
			  		</Button>
			  	</Link>
			  	
			  	
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerCardLayout
	title={"List Article"}
	singularName={"Article"}
	items={[listArticle]}
	isLoading={isLoading.listArticle}
>
	<ArticleCard
		listArticle={listArticle}
		
  	/>
</Layouts.ListContainerCardLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default ListArticlePage

