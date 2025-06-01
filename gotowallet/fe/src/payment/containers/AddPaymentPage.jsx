/*
	Generated on 09/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React, { useEffect, useState, useContext } from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useSearchParams } from "react-router";
import FormAddPayment from '../components/FormAddPayment'
const AddPaymentPage = props => {
	const [isLoading, setIsLoading] = useState({
		addPayment: false,

	});
	const { setTitle } = useContext(HeaderContext);




	useEffect(() => {
		setTitle("Add Payment Page")
	}, []);
	return (
		<Layouts.ViewContainerLayout
			buttons={
				<>
					<Layouts.ViewContainerBackButtonLayout>
						<Link to={`/payment
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
				singularName={"Payment"}

			>
				<FormAddPayment
					{...props}
				/>
			</Layouts.FormContainerLayout>

		</Layouts.ViewContainerLayout>
	)
}
export default AddPaymentPage

