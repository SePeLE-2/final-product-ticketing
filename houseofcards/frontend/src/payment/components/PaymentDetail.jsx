/*
  Generated on 09/05/2025 by UI Generator PRICES-IDE
  https://amanah.cs.ui.ac.id/research/ifml-regen
  version 3.9.0
*/
import React, { useContext } from 'react';
import { useNavigate, Link } from "react-router";

import { useAuth } from '@/commons/auth';
import { Button, Detail, VisualizationAttr, Modal, Spinner } from '@/commons/components';

import * as Layouts from "@/commons/layouts";

const PaymentDetail = ({ data }) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();


  return (
    <Layouts.DetailComponentLayout
      item={data}
      itemsAttrs={[
        {
          id: "amount",
          condition: "",
          label: "amount",
          featureName: "amount",
        }
      ]}
      itemsEvents={[

      ]}
      itemsModals={[

      ]}
    />
  );
};

export default PaymentDetail;
