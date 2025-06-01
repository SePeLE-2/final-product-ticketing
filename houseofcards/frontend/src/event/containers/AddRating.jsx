/*
	Generated on 09/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import FormAddRating from '../components/FormAddRating';

const AddRating = props => {
	const [isLoading, setIsLoading] = useState({
		formAddRating: false,
	});
	const { setTitle } = useContext(HeaderContext);

	useEffect(() => {
		setTitle("Add Rating")
	}, []);
	
	return (
		<Layouts.ViewContainerLayout
			buttons={
				<>
				</>
			}
		>
			<Layouts.FormContainerLayout
				singularName={"Add"}
			>
				<FormAddRating
					{...props}
				/>
			</Layouts.FormContainerLayout>
		</Layouts.ViewContainerLayout>
	)
}

export default AddRating

