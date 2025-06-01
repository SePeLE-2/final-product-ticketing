/*
	Generated on 09/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useAuth } from '@/commons/auth';
import { notifyError, notifySuccess } from "@/commons/utils/toaster";

import EventDetailComponent from '../components/EventDetail'
import getEventData from '../services/getEventData'
import saveReport from '../../report/services/saveReport';

const EventDetail = props => {
    const { eventId } = useParams();
    const navigate = useNavigate();
    const { checkPermission } = useAuth();

    const [isLoading, setIsLoading] = useState({
        eventDetail: false,
        generatingReport: false,
    });
    const { setTitle } = useContext(HeaderContext);

    const [event, setEvent] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(prev => ({...prev, eventDetail: true}));
                const { data: eventData } = await getEventData(eventId);
                setEvent(eventData.data);
            } finally {
                setIsLoading(prev => ({...prev, eventDetail: false}));
            }
        }
        
        if (eventId) {
            fetchData();
        }
    }, [eventId]);

    useEffect(() => {
        setTitle("Event Detail");
    }, []);
    
    const generateSalesReport = async (eventId) => {
        try {
            setIsLoading(prev => ({...prev, generatingReport: true}));
            
            const reportData = {
                eventId,
                type: 'sales',
                eventName: event.name,
                eventDate: event.date,
                reportDate: new Date().toISOString().substring(0, 10),
                ticketsSold: event.ticketsSold || 0,
                totalRevenue: (event.ticketsSold || 0) * (event.ticketPrice || 0),
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
            
            const ticketsSold = event.ticketsSold || 0;
            const attendance = event.attendanceCount || 0;
            const attendancePercentage = ticketsSold > 0 ? Math.round((attendance / ticketsSold) * 100) : 0;
            
            const reportData = {
                eventId,
                type: 'attendance',
                eventName: event.name,
                eventDate: event.date,
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
                    <Layouts.ViewContainerBackButtonLayout>
                        <Link to="/event">
                            <Button className="p-4 w-full" variant="secondary">
                            Kembali
                            </Button>
                        </Link>
                    </Layouts.ViewContainerBackButtonLayout>
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
            <Layouts.DetailContainerLayout
                title={"Event Detail"}
                singularName={"Detail"}
                items={{...event}}
                isLoading={isLoading.eventDetail}
                isCorrelatedWithAnotherComponent={false}
            >
                {event && (
                    <EventDetailComponent 
                        data={event} 
                        onGenerateSalesReport={generateSalesReport}
                        onGenerateAttendanceReport={generateAttendanceReport}
                    />
                )}
            </Layouts.DetailContainerLayout>
        </Layouts.ViewContainerLayout>
    )
}

export default EventDetail 