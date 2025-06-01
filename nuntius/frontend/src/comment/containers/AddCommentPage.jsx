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
import { useSearchParams } from "react-router";
import FormAddComment from '../components/FormAddComment'
const AddCommentPage = props => {
const { articleId } = useParams()

	const [isLoading, setIsLoading] = useState({
	addComment: false,

	});
	const { setTitle } = useContext(HeaderContext);

useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, addComment: true}))


	    setIsLoading(prev => ({...prev, addComment: false}))
    }
	fetch()
  }, [])

	
	useEffect(() => {
		setTitle("Add Comment Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerBackButtonLayout>
			  	<Link to={`/article/${articleId}/comment
			  	`}>
			  		<Button className="p-4" variant="secondary">
			  		  Kembali
			  		</Button>
			  	</Link>
			  	
			  	
			  </Layouts.ViewContainerBackButtonLayout>
			</>
		}
	>
<Layouts.FormContainerLayout
		singularName={"Comment"}
		isLoading={isLoading.addComment}
	>
		<FormAddComment
			{...props}
		/>
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default AddCommentPage

