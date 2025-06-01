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

import PaymentDetail from '../components/PaymentDetail'
import getPayment from '../services/getPayment'
const PaymentDetailPage = props => {
	const { paymentId } = useParams()

	const [isLoading, setIsLoading] = useState({
		paymentDetail: false,

	});
	const { setTitle } = useContext(HeaderContext);

	const [payment, setPayment] = useState()
	useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({ ...prev, paymentDetail: true }))
				const { data: payment } = await getPayment({ paymentId })
				setPayment(payment.data)
			} finally {
				setIsLoading(prev => ({ ...prev, paymentDetail: false }))
			}
		}
		fetchData()
	}, [])


	useEffect(() => {
		setTitle("Payment Detail Page")
	}, []);
	return (
		<Layouts.ViewContainerLayout
			buttons={
				<>
					<Layouts.ViewContainerBackButtonLayout>
						<Link to={`/payment
			  	`}>
							<Button className="p-4 w-full" variant="secondary">
								Kembali
							</Button>
						</Link>


					</Layouts.ViewContainerBackButtonLayout>
				</>
			}
		>
			<Layouts.DetailContainerLayout
				title={"Payment Detail"}
				singularName={"Detail"}
				items={{ ...payment }}
				isLoading={isLoading.paymentDetail}
				isCorrelatedWithAnotherComponent={false}
			>
				<PaymentDetail {...{ data: { ...payment } }} />
			</Layouts.DetailContainerLayout>

		</Layouts.ViewContainerLayout>
	)
}
export default PaymentDetailPage

