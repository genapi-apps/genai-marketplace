"use client"
import DetailPage from '@/components/Detail/page'
import React, {FC, useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import axios from 'axios'
 
export interface CardDetailProps {
 
  id: number;
  name:string
}

const PageDetail: FC<CardDetailProps> = ({id,name}) => { 
  const params = useParams<{ id:string;name: string; }>()
 
   const [moduleDetail, setModuleDetail] = useState()
  
 

    useEffect(() => {
    const getModule = async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/get-modules-details/${JSON.parse(params.id)}`,
        { 
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${getToken()}`
          }
        }
      )  
 
      setModuleDetail(response.data.data) 
    }
      
    getModule()
  }, [])
 
  return (
   <DetailPage moduleDetail={moduleDetail} />
  )
}

export default PageDetail