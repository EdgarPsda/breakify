import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setFirstName(state, action) {
      state.firstName = action.payload;
    },
    setLastName(state, action) {
      state.lastName = action.payload;
    },
  },
});

export const { setFirstName, setLastName } = formSlice.actions;
export default formSlice.reducer;
