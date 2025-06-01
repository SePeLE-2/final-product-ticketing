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
import FormAddEvent from '../components/FormAddEvent';

const AddEvent = props => {
	const [isLoading, setIsLoading] = useState({
		formAddEvent: false,
	});
	const { setTitle } = useContext(HeaderContext);

	useEffect(() => {
		setTitle("Add Event")
	}, []);
	
	return (
		<Layouts.ViewContainerLayout
			buttons={
				<Layouts.ViewContainerBackButtonLayout>
					<Link to="/event">
						<Button className="p-4 w-full" variant="secondary">
							Kembali
						</Button>
					</Link>
				</Layouts.ViewContainerBackButtonLayout>
			}
		>
			<Layouts.FormContainerLayout
				singularName={"Add"}
			>
				<FormAddEvent
					{...props}
				/>
			</Layouts.FormContainerLayout>
		</Layouts.ViewContainerLayout>
	)
}

export default AddEvent

