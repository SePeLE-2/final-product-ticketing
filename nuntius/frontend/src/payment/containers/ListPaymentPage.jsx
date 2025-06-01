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
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import PaymentCard from "../components/PaymentCard";

import getListPayment from '../services/getListPayment'
const ListPaymentPage = props => {
	const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
		listPayment: false,
	});
	const { setTitle } = useContext(HeaderContext);

	const [listPayment, setlistPayment] = useState();

	useEffect(() => {


		const fetchData = async () => {
			try {
				setIsLoading(prev => ({ ...prev, listPayment: true }))
				const { data: listPayment } = await getListPayment()
				setlistPayment(listPayment.data)
			} finally {
				setIsLoading(prev => ({ ...prev, listPayment: false }))
			}
		}
		fetchData()
	}, [])


	useEffect(() => {
		setTitle("List Payment Page")
	}, []);
	return (
		<Layouts.ViewContainerLayout
			buttons={
				<>
					<Layouts.ViewContainerButtonLayout>
						<Link to={`/payment/create
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
				title={"List Payment"}
				singularName={"Payment"}
				items={[listPayment]}
				isLoading={isLoading.listPayment}
			>
				<PaymentCard
					listPayment={listPayment}

				/>
			</Layouts.ListContainerCardLayout>

		</Layouts.ViewContainerLayout>
	)
}
export default ListPaymentPage

