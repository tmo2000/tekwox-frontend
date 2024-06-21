// sessionReducer.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  accounttype: 'Personal',
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  password_confirmation: ''
};

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    setSessionData(state, action) {
      return { ...state, ...action.payload };
    }
  }
});

export const { setSessionData } = sessionSlice.actions;
export default sessionSlice.reducer;
