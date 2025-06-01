/*
	Generated on 09/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React, { useState, useEffect } from 'react';
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router";
import { InputField, Button, SelectionField, Spinner } from "@/commons/components";
import * as Layouts from '@/commons/layouts';
import { notifySuccess, notifyError } from "@/commons/utils/toaster";
import cleanFormData from "@/commons/utils/cleanFormData";
import getEventData from '../../event/services/getEventData';
import saveTicket from '../services/saveTicket';

const FormAddTicket = () => {
  const { 
    control, 
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm();
  
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState({
    saving: false,
    loadingEvents: false
  });
  const [events, setEvents] = useState([]);
  
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setIsLoading(prev => ({...prev, loadingEvents: true}));
        const { data: eventData } = await getEventData();
        setEvents(eventData.data || []);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setIsLoading(prev => ({...prev, loadingEvents: false}));
      }
    };
    
    fetchEvents();
  }, []);
  
  const addTicket = async (data) => {
    try {
      setIsLoading(prev => ({...prev, saving: true}));
      const cleanData = cleanFormData(data);
      
      // Parse price to number
      cleanData.price = parseFloat(cleanData.price);
      
      // Find the selected event to get its name
      const selectedEvent = events.find(event => event.id === cleanData.eventId);
      if (selectedEvent) {
        cleanData.eventName = selectedEvent.name;
      }
      
      // Set availability as boolean
      cleanData.availability = cleanData.availability === "true";
      
      const response = await saveTicket(cleanData);
      
      notifySuccess("Ticket berhasil ditambahkan");
      navigate("/ticket");
    } catch (error) {
      notifyError("Gagal menambahkan ticket");
      console.error(error);
    } finally {
      setIsLoading(prev => ({...prev, saving: false}));
    }
  };
  
  return (
	<div>
	  <Layouts.FormComponentLayout
	    title="Add Ticket" 
	    onSubmit={handleSubmit(addTicket)}
	    vas={[]}
	    formFields={[
	      <Controller
	        key="eventId"
	        name="eventId"
	        control={control}
	        rules={{ required: "Event is required" }}
	        render={({ field, fieldState }) => (
	          <SelectionField
	            label="Event"
	            placeholder={isLoading.loadingEvents ? "Loading events..." : "Select event"}
	            options={events.map(event => ({
	              value: event.id,
	              label: event.name
	            }))}
	            fieldState={fieldState}
	            isLoading={isLoading.loadingEvents}
	            isDisabled={isLoading.loadingEvents}
	            {...field}
	            isRequired={true}
	          />
	        )}
	      />,
	      <Controller
	        key="ticketName"
	        name="ticketName"
	        control={control}
	        rules={{ required: "Ticket name is required" }}
	        render={({ field, fieldState }) => (
	          <InputField
	            label="Ticket Name"
	            placeholder="Enter ticket name"
	            fieldState={fieldState}
	            {...field}
	            isRequired={true}
	          />
	        )}
	      />,
	      <Controller
	        key="price"
	        name="price"
	        control={control}
	        rules={{ 
              required: "Price is required",
              pattern: {
                value: /^[0-9]+(\.[0-9]{1,2})?$/,
                message: "Enter a valid price"
              }
            }}
	        render={({ field, fieldState }) => (
	          <InputField
	            label="Price"
	            type="number"
	            placeholder="Enter ticket price"
	            fieldState={fieldState}
	            {...field}
	            isRequired={true}
	          />
	        )}
	      />,
	      <Controller
	        key="availability"
	        name="availability"
	        control={control}
	        defaultValue="true"
	        render={({ field, fieldState }) => (
	          <SelectionField
	            label="Availability"
	            placeholder="Select availability"
	            options={[
	              { value: "true", label: "Available" },
	              { value: "false", label: "Sold Out" }
	            ]}
	            fieldState={fieldState}
	            {...field}
	            isRequired={false}
	          />
	        )}
	      />
	    ]}
	    itemsEvents={[
	      <Button key="add" type="submit" variant="primary" disabled={isLoading.saving}>
	        {isLoading.saving ? <Spinner size="sm" /> : "Tambah"}
	      </Button>
	    ]}
	  />
	</div>
  );
};

export default FormAddTicket; 