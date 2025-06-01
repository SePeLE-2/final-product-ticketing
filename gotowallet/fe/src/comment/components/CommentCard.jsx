/*
	Generated on 09/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React from 'react'
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"

import { useAuth } from '@/commons/auth'
import { Button } from '@/commons/components';

import * as Layouts from "@/commons/layouts";

const CommentCard = ({ comment,
	}) => {
  const { checkPermission } = useAuth();
  const { articleId } = useParams()
  
  return (
    <Layouts.ListComponentCardLayout
      items={[comment]}
  	
  	itemsAttrs={[
          {
            id: "author",
            condition: "",
            label: "author",
  		  featureName: "commentAuthor",
            editable: false
          }
  ,
          {
            id: "comment",
            condition: "",
            label: "comment",
  		  featureName: "comment",
            editable: false
          }
  ]}
      itemsEvents={(commentItem) => [
  	]}
    />
  )	
};

export default CommentCard;
