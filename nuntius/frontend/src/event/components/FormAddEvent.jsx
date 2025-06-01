/*
	Generated on 09/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
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
import saveEvent from "../services/saveEvent";

const FormAddEvent = ({ }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm();
  
  const navigate = useNavigate();
  
  const tambah = (data) => {
    const cleanData = cleanFormData(data);
    saveEvent({
      ...cleanData,
    })
      .then(({ data: { data } }) => {
        notifySuccess("Event berhasil ditambahkan");
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
  
  return (
    <div>
      <Layouts.FormComponentLayout
        title="Add Event" 
        onSubmit={handleSubmit(tambah)}
        formFields={[
          <Controller
            key="name"
            name="name"
            control={control}
            render={({ field, fieldState }) => (
              <InputField
                label="Event Name"
                placeholder="Enter event name"
                fieldState={fieldState}
                {...field}
                isRequired={true}
              />
            )}
          />,
          <Controller
            key="date"
            name="date"
            control={control}
            render={({ field, fieldState }) => (
              <InputField
                type="date"
                label="Event Date"
                placeholder="Select event date"
                fieldState={fieldState}
                {...field}
                isRequired={true}
              />
            )}
          />,
          <Controller
            key="location"
            name="location"
            control={control}
            render={({ field, fieldState }) => (
              <InputField
                label="Event Location"
                placeholder="Enter event location"
                fieldState={fieldState}
                {...field}
                isRequired={true}
              />
            )}
          />,
          <Controller
            key="description"
            name="description"
            control={control}
            render={({ field, fieldState }) => (
              <TextAreaField
                label="Event Description"
                placeholder="Enter event description"
                fieldState={fieldState}
                {...field}
                isRequired={false}
              />
            )}
          />,
        ]}
        itemsEvents={[
          <Button key="Tambah" type="submit" variant="primary">Add Event</Button>
        ]}
      />
    </div>
  );
};

export default FormAddEvent; 