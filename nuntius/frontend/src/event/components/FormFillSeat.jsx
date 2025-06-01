/*
	Generated on 09/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import {
  Button,
  Form,
  SelectionField,
  InputField,
  TextAreaField,
  Spinner,
} from "@/commons/components";
import cleanFormData from "@/commons/utils/cleanFormData";
import { notifyError, notifySuccess } from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";
import fillSeat from "../services/fillSeat";
import getEventData from "../services/getEventData";

const FormFillSeat = ({ }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm();
  
  const navigate = useNavigate();
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    if (eventId) {
      setLoading(true);
      getEventData(eventId)
        .then(({ data }) => {
          setEvent(data.data);
        })
        .catch((error) => {
          notifyError("Failed to fetch event details");
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [eventId]);
  
  const fill = (data) => {
    const cleanData = cleanFormData(data);
    fillSeat({
      ...cleanData,
      eventId,
    })
      .then(({ data: { data } }) => {
        notifySuccess("Seat berhasil diisi");
        navigate(`/event`);
      })
      .catch((error) => {
        notifyError(
          error.response?.data?.data?.message ||
            error ||
            "Terjadi kesalahan pada sistem. Harap coba lagi!"
        );
      });
  };
  
  if (loading) {
    return <Spinner />;
  }
  
  return (
    <div>
      <Layouts.FormComponentLayout
        title="Fill Seat" 
        onSubmit={handleSubmit(fill)}
        formFields={[
          <div key="eventName" className="mb-4">
            <h3 className="font-bold text-lg">Event: {event?.name || 'Loading...'}</h3>
          </div>,
          <Controller
            key="name"
            name="name"
            control={control}
            render={({ field, fieldState }) => (
              <InputField
                label="Full Name"
                placeholder="Enter your full name"
                fieldState={fieldState}
                {...field}
                isRequired={true}
              />
            )}
          />,
          <Controller
            key="email"
            name="email"
            control={control}
            render={({ field, fieldState }) => (
              <InputField
                label="Email"
                placeholder="Enter your email"
                fieldState={fieldState}
                {...field}
                isRequired={true}
              />
            )}
          />,
          <Controller
            key="seatNumber"
            name="seatNumber"
            control={control}
            render={({ field, fieldState }) => (
              <InputField
                label="Seat Number"
                placeholder="Enter seat number"
                fieldState={fieldState}
                {...field}
                isRequired={true}
              />
            )}
          />,
          <Controller
            key="specialRequirements"
            name="specialRequirements"
            control={control}
            render={({ field, fieldState }) => (
              <TextAreaField
                label="Special Requirements"
                placeholder="Enter any special requirements"
                fieldState={fieldState}
                {...field}
                isRequired={false}
              />
            )}
          />,
        ]}
        itemsEvents={[
          <Button key="Submit" type="submit" variant="primary">Book Seat</Button>
        ]}
      />
    </div>
  );
};

export default FormFillSeat; 