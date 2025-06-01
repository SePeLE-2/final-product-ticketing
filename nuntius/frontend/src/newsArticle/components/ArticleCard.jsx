/*
	Generated on 09/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React, { useEffect, useState, useContext} from 'react'
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"

import { useAuth } from '@/commons/auth'
import { Button } from '@/commons/components';

import * as Layouts from "@/commons/layouts";

const ArticleCard = ({ listArticle,}) => {
  const { checkPermission } = useAuth();
  
  return (
    <Layouts.ListComponentCardLayout
      items={[listArticle]}
  	
  	itemsAttrs={[
          {
            id: "articleTitle",
            condition: "",
            label: "article title",
  		      featureName: "articleTitle",
            editable: false
          }
  ,
          {
            id: "articleDatePublished",
            condition: "",
            label: "article date",
  		      featureName: "articleDatePublished",
            editable: false
          }
  ,
          {
            id: "articleAuthor",
            condition: "",
            label: "article author",
  		      featureName: "articleAuthor",
            editable: false
          }
  ]}
      itemsEvents={(articleItem) => [
        
        <Link key={articleItem.idArticle} to={`/article/${articleItem.idArticle}`}>
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

export default ArticleCard;
