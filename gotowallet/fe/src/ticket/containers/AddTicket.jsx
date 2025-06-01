/*
	Generated on 09/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React, { useEffect, useContext } from 'react';
import { Button } from "@/commons/components";
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { HeaderContext } from "@/commons/components";
import { useAuth } from '@/commons/auth';

import FormAddTicket from '../components/FormAddTicket';

const AddTicket = props => {
  const { checkPermission } = useAuth();
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Add Ticket");
  }, [setTitle]);

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
      <Layouts.FormContainerLayout title="Tambah Tiket">
        <FormAddTicket />
      </Layouts.FormContainerLayout>
    </Layouts.ViewContainerLayout>
  );
};

export default AddTicket; 