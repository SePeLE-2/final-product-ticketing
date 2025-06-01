/*
	Generated on 09/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router";
import {
  Button,
  Form,
  SelectionField,
  MultiSelectionField,
  InputField,
  MultiSelectField,
  RadioInputField,
  TextAreaField,
  RichTextField,
  VisualizationAttr,
  Spinner,
  
  
} from "@/commons/components";
import {
  ALLOWED_PERMISSIONS,
  findAllowedPermission,
} from "@/commons/constants/allowedPermission";
import cleanFormData from "@/commons/utils/cleanFormData";
import saveArticle from '../services/saveArticle'

import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormAddArticle = ({ 
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm()
  
  
  
  
  const navigate = useNavigate()
  
  const tambah = (data) => {
    const cleanData = cleanFormData(data)

	saveArticle({
		...cleanData,
	})
	.then(({ data: { data } }) => {
      navigate(`/article`)
    })
    .catch((error) => {
      console.error(error);
      notifyError(error);
    });

  }
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Add Article" 
		  onSubmit={handleSubmit(tambah)}
	
	    vas={[
		  ]}
	
		  formFields={[
			  
			  <Controller
			    key="articletitle"
		        name="articletitle"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Article Title"
		            placeholder="Masukkan article title"
		            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="articlecontent"
		        name="articlecontent"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Article Content"
		            placeholder="Masukkan article content"
		            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
		  ,
	
		  ]}
	
		  itemsEvents={[
				<Button key="Tambah" type="submit" variant="primary">Tambah</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default FormAddArticle
