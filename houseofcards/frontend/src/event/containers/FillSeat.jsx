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
import FormFillSeat from '../components/FormFillSeat';

const FillSeat = props => {
	const [isLoading, setIsLoading] = useState({
		formFillSeat: false,
	});
	const { setTitle } = useContext(HeaderContext);

	useEffect(() => {
		setTitle("Fill Seat")
	}, []);
	
	return (
		<Layouts.ViewContainerLayout
			buttons={
				<>
				</>
			}
		>
			<Layouts.FormContainerLayout
				singularName={"Fill"}
			>
				<FormFillSeat
					{...props}
				/>
			</Layouts.FormContainerLayout>
		</Layouts.ViewContainerLayout>
	)
}

export default FillSeat 