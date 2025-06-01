/*
	Generated on 09/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React, { useEffect, useState, useContext } from 'react';
import { Button, Spinner } from "@/commons/components";
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams";
import { HeaderContext } from "@/commons/components";
import { useAuth } from '@/commons/auth';

import TicketDetailComponent from "../components/TicketDetail";
import getTicketDetail from '../services/getTicketDetail';

const TicketDetail = props => {
  const { checkPermission } = useAuth();
  const { ticketId } = useParams();
  
  const [isLoading, setIsLoading] = useState(false);
  const { setTitle } = useContext(HeaderContext);
  const [ticket, setTicket] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const { data: ticketData } = await getTicketDetail(ticketId);
        setTicket(ticketData.data);
      } finally {
        setIsLoading(false);
      }
    };
    
    if (ticketId) {
      fetchData();
    }
  }, [ticketId]);

  useEffect(() => {
    setTitle("Ticket Detail");
  }, [setTitle]);

  if (isLoading) {
    return <Spinner />;
  }
  
  if (!ticket) {
    return (
      <div className="text-center p-8">
        <h2 className="text-xl font-bold">Ticket not found</h2>
      </div>
    );
  }

  return (
    <Layouts.ViewContainerLayout
      buttons={
        <Layouts.ViewContainerBackButtonLayout>
          <Link to="/ticket">
            <Button className="p-4 w-full" variant="secondary">
              Kembali
            </Button>
          </Link>
        </Layouts.ViewContainerBackButtonLayout>
      }
    >
      <Layouts.DetailContainerLayout title="Detail Tiket">
        <TicketDetailComponent data={ticket} />
      </Layouts.DetailContainerLayout>
    </Layouts.ViewContainerLayout>
  );
};

export default TicketDetail; 