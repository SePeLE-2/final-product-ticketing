import React, { useEffect, useState, useContext } from 'react';
import { Button, Spinner } from "@/commons/components";
import * as Layouts from '@/commons/layouts';
import { Link, useNavigate } from "react-router";
import { HeaderContext } from "@/commons/components";
import { useAuth } from '@/commons/auth';
import TicketTable from "../components/TicketTable";

import getTickets from '../services/getTickets';

const TicketList = () => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();
  const { setTitle } = useContext(HeaderContext);

  const [isLoading, setIsLoading] = useState(false);
  const [ticketData, setTicketData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await getTickets(); // jangan destructuring dulu
        setTicketData(response.data || []);
        console.log("✅ Data tiket:", response.data);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  
  return (
    <Layouts.ViewContainerLayout>
      {/* Tombol Tambah */}
      <div className="flex justify-end mb-4">
        <Link to="/ticket/add">
          <Button variant="primary" className="p-2">
            Tambah
          </Button>
        </Link>
      </div>

      {/* Judul */}
      <h2 className="text-2xl font-bold mb-4">List Ticket</h2>

      {/* Loading */}
      {isLoading ? (
        <div className="text-center py-8">
          <Spinner />
        </div>
      ) : (
        <TicketTable ticketData={ticketData} />
      )}
    </Layouts.ViewContainerLayout>
  );
};

export default TicketList;
