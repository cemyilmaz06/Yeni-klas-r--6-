import { createSlice } from "@reduxjs/toolkit"

const initialState={
user:""
}

const authSlice=createSlice({
    naem:"auth",
    initialState,

    reducers:{
        setUser:(state,action)=>{
           state.user=action.payload 
        }
    }
})

export const{setUser}=authSlice.actions
export default authSlice.reducer