import { createSlice, current } from "@reduxjs/toolkit"
 
 

export interface CounterState {
  auth: "",
  email:string,
  otp:string,
  moduleList:any
  
}
 

const initialState: CounterState = {
  auth: "",
  email:"",
  otp:"", 
  moduleList:""
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
    }
    
  }
})

export const { 
  setEmailAuth, setOtpAuth, setModuleList
} = counterSlice.actions

export default counterSlice.reducer
