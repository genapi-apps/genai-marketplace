"use client"
import NftDetailPage from '@/app/nft-detail/page'
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import axios from 'axios'
 
const PageDetail = ({name}) => { 
  const params = useParams<{ name: string; }>()
 
   const [moduleDetail, setModuleDetail] = useState()
  
 

    useEffect(() => {
    const getModule = async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/get-modules-details/${JSON.parse(params.name)}`,
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