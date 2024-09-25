import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchnote = createAsyncThunk("notes/fetch", async () => {
  const response = await fetch("http://localhost:3001/note");
  return response.json();
});

const Noteslice = createSlice({
  name: "note",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
      axios
        .post("http://localhost:3001/note", action.payload)
        .catch((error) => {
          console.error("eroor", error);
        });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchnote.fulfilled, (state, action) => {
        state = action.payload;
        return action.payload;
      })
      .addCase(fetchnote.rejected, (state, action) => {
        console.error("errr", action.error);
      });
  },
});

export const { add } = Noteslice.actions;
export default Noteslice.reducer;
