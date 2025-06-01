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
import CommentCard from "../components/CommentCard";

import getComment from '../services/getComment'
const ListCommentPage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	listComment: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [comment, setComment] = useState()
const { articleId } = useParams()
	
	
	

	useEffect(() => {
		

		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, listComment: true}))
				const { data: comment } = await getComment({ articleId })
				setComment(comment.data)
			} finally {
				setIsLoading(prev => ({...prev, listComment: false}))
			}
		}
		fetchData()
  	}, [])

	
	useEffect(() => {
		setTitle("List Comment Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/article/${articleId}/comment/create
			  	`}>
			  		<Button className="p-2" variant="primary">
			  		  Add Comment
			  		</Button>
			  	</Link>
			  	
			  	
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerCardLayout
	title={"List Comment"}
	singularName={"Comment"}
	items={[comment]}
	isLoading={isLoading.listComment}
>
	<CommentCard
		comment={comment}
		
  	/>
</Layouts.ListContainerCardLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default ListCommentPage

