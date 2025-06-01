/*
  Generated on 09/05/2025 by UI Generator PRICES-IDE
  https://amanah.cs.ui.ac.id/research/ifml-regen
  version 3.9.0
*/
import React, { useEffect, useState, useContext } from 'react'
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"

import { useAuth } from '@/commons/auth'
import { Button } from '@/commons/components';

import * as Layouts from "@/commons/layouts";

const PaymentCard = ({ listPayment, }) => {
  const { checkPermission } = useAuth();

  return (
    <Layouts.ListComponentCardLayout
      items={[listPayment]}

      itemsAttrs={[
        {
          id: "amount",
          condition: "",
          label: "amount",
          featureName: "amount",
          editable: false
        },
        {
          id: "eventName",
          label: "Event Name",
          featureName: "eventName",
          editable: false
        },
        {
          id: "ticketName",
          label: "Ticket Name",
          featureName: "ticketName",
          editable: false
        },
        {
          id: "price",
          label: "Price",
          featureName: "price",
          editable: false
        },
        {
          id: "availability",
          label: "Availability",
          featureName: "availability",
          editable: false
        },
        {
          id: "eligibility",
          label: "Eligibility",
          render: (item) => (
            <span style={{ color: item.amount >= item.ticketimpl.price ? 'green' : 'red' }}>
              {item.amount >= item.ticketimpl.price ? "Eligible" : "Ineligible"}
            </span>
          ),
          editable: false
        }
      ]}
      itemsEvents={(paymentItem) => [

        <Link key={paymentItem.idPayment} to={`/payment/${paymentItem.idPayment}`}>
          <Button
            size="sm"
            variant=
            "primary"
          >
            Detail
          </Button>
        </Link>


      ]}
    />
  )
};

export default PaymentCard;
