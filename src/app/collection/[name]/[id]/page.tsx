"use client"
import NftDetailPage from '@/app/nft-detail/page'
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import axios from 'axios'
 
const PageDetail = ({id,name}) => { 
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
   <NftDetailPage moduleDetail={moduleDetail} />
  )
}

export default PageDetail