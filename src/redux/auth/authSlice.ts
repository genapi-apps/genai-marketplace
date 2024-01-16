import { createSlice, current } from "@reduxjs/toolkit"
 
 

export interface CounterState {
  auth: "",
  email:string,
  otp:string,
  moduleList:any,
  categoryList: any
  
}
 

const initialState: CounterState = {
  auth: "",
  email:"",
  otp:"", 
  moduleList:"",
  categoryList:""
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
    }

    
  }
})

export const { 
  setEmailAuth, setOtpAuth, setModuleList, setCategoryList
} = counterSlice.actions

export default counterSlice.reducer
