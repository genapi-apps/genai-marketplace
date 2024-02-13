import { createSlice, current } from "@reduxjs/toolkit"
 
 

export interface CounterState {
  auth: "",
  email:string,
  otp:string,
  moduleList:any,
  categoryList: any,
  trendingList:any,
  newestList:any,
  featuredList:any
  
}
 

const initialState: CounterState = {
  auth: "",
  email:"",
  otp:"", 
  moduleList:"",
  categoryList:"",
  trendingList:"",
  newestList:"",
  featuredList:""
}
 

export const counterSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
      setEmailAuth: (state, action) => {
      state.email = action.payload
    },
    setOtpAuth: (state, action) => {
      state.otp = action.payload
    },
    setModuleList:(state, action)=>{
      
    state.moduleList = action.payload
    },
    setCategoryList:(state,action)=>{
     state.categoryList= action.payload
    },
    setNewestList:(state,action)=>{
     state.newestList= action.payload
    },
    setTrendingList:(state,action)=>{
     state.trendingList= action.payload
    },
       setFeatureList:(state,action)=>{
     state.featuredList= action.payload
    }

    
  }
})

export const { 
  setEmailAuth, setOtpAuth, setModuleList, setCategoryList,setNewestList,setTrendingList, setFeatureList
} = counterSlice.actions

export default counterSlice.reducer
