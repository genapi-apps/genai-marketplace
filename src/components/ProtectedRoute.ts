"use client"  
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

 const ProtectedRoute = ({ children }) => {
   const [showLoading, setLoading] = useState(false)
 const router = useRouter()

  useEffect(() => { 
     const getNewToken = async () => {
   setLoading(true)
    if( localStorage.getItem("marketplacegenaitoken")){
       setLoading(false)
        router.push("/")
    }else{
        router.push("/login")
    }
  }
    getNewToken()
  }, [])

  if (showLoading) {
    return children
  }
  
  return children
}

export default ProtectedRoute