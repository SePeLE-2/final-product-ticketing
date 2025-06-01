/*
	Generated on 09/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useParams } from "@/commons/hooks/useParams"
import { useNavigate, useSearchParams } from "react-router";
// import { useNavigate, useParams } from "react-router-dom";
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
import saveComment from '../services/saveComment'

import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormAddComment = ({ 
 }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: { comment: "" }
  });

  const { articleId } = useParams();
  console.log("ARTICLE ID", articleId)
  const navigate = useNavigate()
  
  const tambah = (data) => {
    const cleanData = cleanFormData(data)
    saveComment(cleanData, articleId)
    .then(({ data: { data } }) => {
     navigate(`/article/${articleId}/comment`)
  	notifySuccess(`Save Comment berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Add Comment" 
		  onSubmit={handleSubmit(tambah)}
	
	    vas={[
		  ]}
	
		  formFields={[
			  
			  <Controller
			    key="comment"
		        name="comment"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Comment"
		            placeholder="Masukkan comment"
		            defaultValue=""	            fieldState={fieldState}
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

export default FormAddComment
