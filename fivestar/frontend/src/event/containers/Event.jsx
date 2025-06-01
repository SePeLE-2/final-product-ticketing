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
import EventTable from "../components/EventTable";
import { notifyError, notifySuccess } from "@/commons/utils/toaster";

import getEventData from '../services/getEventData';
import saveReport from '../../report/services/saveReport';

const Event = props => {
	const { checkPermission } = useAuth();
	const navigate = useNavigate();

	const [isLoading, setIsLoading] = useState({
		listEvent: false,
		generatingReport: false,
	});
	const { setTitle } = useContext(HeaderContext);

	const [eventData, setEventData] = useState([])
	
	useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, listEvent: true}))
				const { data: eventData } = await getEventData()
				setEventData(eventData.data)
			} finally {
				setIsLoading(prev => ({...prev, listEvent: false}))
			}
		}
		fetchData()
	}, [])

	useEffect(() => {
		setTitle("Event")
	}, []);
	
	const handleAddEvent = () => {
		navigate("/event/add");
	};
	
	const handleViewReports = () => {
		navigate("/report");
	};
	
	const generateSalesReport = async (eventId) => {
		try {
			setIsLoading(prev => ({...prev, generatingReport: true}));
			const { data: eventDetail } = await getEventData(eventId);
			const eventData = eventDetail.data;
			
			const reportData = {
				eventId,
				type: 'sales',
				eventName: eventData.name,
				eventDate: eventData.date,
				reportDate: new Date().toISOString().substring(0, 10),
				ticketsSold: eventData.ticketsSold || 0,
				totalRevenue: (eventData.ticketsSold || 0) * (eventData.ticketPrice || 0),
			};
			
			const response = await saveReport(reportData);
			notifySuccess("Sales report berhasil dibuat");
			navigate(`/report/${response.data.data.id}`);
		} catch (error) {
			notifyError("Gagal membuat laporan penjualan");
			console.error(error);
		} finally {
			setIsLoading(prev => ({...prev, generatingReport: false}));
		}
	};
	
	const generateAttendanceReport = async (eventId) => {
		try {
			setIsLoading(prev => ({...prev, generatingReport: true}));
			const { data: eventDetail } = await getEventData(eventId);
			const eventData = eventDetail.data;
			
			const ticketsSold = eventData.ticketsSold || 0;
			const attendance = eventData.attendanceCount || 0;
			const attendancePercentage = ticketsSold > 0 ? Math.round((attendance / ticketsSold) * 100) : 0;
			
			const reportData = {
				eventId,
				type: 'attendance',
				eventName: eventData.name,
				eventDate: eventData.date,
				reportDate: new Date().toISOString().substring(0, 10),
				ticketsSold: ticketsSold,
				attendance: attendance,
				attendancePercentage: attendancePercentage,
			};
			
			const response = await saveReport(reportData);
			notifySuccess("Attendance report berhasil dibuat");
			navigate(`/report/${response.data.data.id}`);
		} catch (error) {
			notifyError("Gagal membuat laporan kehadiran");
			console.error(error);
		} finally {
			setIsLoading(prev => ({...prev, generatingReport: false}));
		}
	};

	return (
		<Layouts.ViewContainerLayout
			buttons={
				<>
					<Layouts.ViewContainerButtonLayout>
						<Link to="/event/add">
							<Button className="p-2" variant="primary">
								Tambah
							</Button>
						</Link>
						<Link to="/report">
							<Button className="p-2" variant="secondary">
								Lihat Laporan
							</Button>
						</Link>
					</Layouts.ViewContainerButtonLayout>
				</>
			}
		>
			{isLoading.generatingReport && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
					<div className="bg-white p-6 rounded-lg shadow-lg">
						<Spinner className="mx-auto" />
						<p className="text-center mt-2">Generating report...</p>
					</div>
				</div>
			)}
			<Layouts.ListContainerTableLayout
				title={"List Event"}
				singularName={"Event"}
				items={eventData || []}
				isLoading={isLoading.listEvent}
				actions={(item) => (
					<div className="flex gap-2 flex-wrap">
						<Link to={`/event/${item.id}`}>
							<Button variant="primary" size="sm">Detail</Button>
						</Link>
						<Link to={`/event/fill-seat/${item.id}`}>
							<Button variant="secondary" size="sm">Fill Seat</Button>
						</Link>
						<Link to={`/event/rating/${item.id}`}>
							<Button variant="secondary" size="sm">Add Rating</Button>
						</Link>
						<div className="dropdown dropdown-end">
							<label tabIndex={0} className="btn btn-sm">
								Reports
							</label>
							<ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
								<li>
									<button onClick={() => generateSalesReport(item.id)}>
										Generate Sales Report
									</button>
								</li>
								<li>
									<button onClick={() => generateAttendanceReport(item.id)}>
										Generate Attendance Report
									</button>
								</li>
							</ul>
						</div>
					</div>
				)}
			>
				<EventTable
					eventData={eventData}
					onGenerateSalesReport={generateSalesReport}
					onGenerateAttendanceReport={generateAttendanceReport}
				/>
			</Layouts.ListContainerTableLayout>
		</Layouts.ViewContainerLayout>
	)
}

export default Event

