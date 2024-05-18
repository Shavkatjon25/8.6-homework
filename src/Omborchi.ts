import { createSlice } from "@reduxjs/toolkit";


const Omborchi = createSlice({
    name: 'counter',
    initialState: {
      token:localStorage.getItem('tk') ? localStorage.getItem('tk') : '',
    },
    reducers: {
        tk:(state, action)=>{
            state.token=action.payload;
        }
    },
  });

  export default Omborchi