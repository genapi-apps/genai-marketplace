import { createSlice, current } from "@reduxjs/toolkit"
 
 

export interface CounterState {
  auth: "",
  email:string,
  otp:string
  
}
 

const initialState: CounterState = {
  auth: "",
  email:"",
  otp:""
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
    
  }
})

export const { 
  setEmailAuth, setOtpAuth
} = counterSlice.actions

export default counterSlice.reducer
