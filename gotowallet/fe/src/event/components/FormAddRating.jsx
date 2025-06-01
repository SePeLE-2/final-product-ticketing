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
import saveRating from "../services/saveRating";
import getEventData from "../services/getEventData";

const FormAddRating = ({ }) => {
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
  
  const tambah = (data) => {
    const cleanData = cleanFormData(data);
    saveRating({
      ...cleanData,
      eventId,
    })
      .then(({ data: { data } }) => {
        notifySuccess("Rating berhasil ditambahkan");
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
        title="Add Rating" 
        onSubmit={handleSubmit(tambah)}
        formFields={[
          <div key="eventName" className="mb-4">
            <h3 className="font-bold text-lg">Event: {event?.name || 'Loading...'}</h3>
          </div>,
          <Controller
            key="rating"
            name="rating"
            control={control}
            render={({ field, fieldState }) => (
              <InputField
                type="number"
                label="Rating"
                placeholder="Enter rating (1-5)"
                fieldState={fieldState}
                min={1}
                max={5}
                {...field}
                isRequired={true}
              />
            )}
          />,
          <Controller
            key="comment"
            name="comment"
            control={control}
            render={({ field, fieldState }) => (
              <TextAreaField
                label="Comment"
                placeholder="Enter your comments"
                fieldState={fieldState}
                {...field}
                isRequired={false}
              />
            )}
          />,
        ]}
        itemsEvents={[
          <Button key="Submit" type="submit" variant="primary">Submit Rating</Button>
        ]}
      />
    </div>
  );
};

export default FormAddRating; 