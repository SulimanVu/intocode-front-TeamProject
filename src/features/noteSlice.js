import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  notes: [],
  loader: false,
};

export const fetchNote = createAsyncThunk(
  "note/fetch",
  async (_, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:3000/notes`);
      const data = await res.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addNote = createAsyncThunk(
  "note/add",
  async ({ student, notes }, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:3000/note", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${thunkAPI.getState().application.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({student, notes}),
      });
      
      const data = await res.json();
      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const removeNote = createAsyncThunk(
  "note/remove",
  async (notes, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:3000/note/${notes}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${thunkAPI.getState().application.token}`,
        }
      });
      const data = await res.json();
      if (data.error) {
        return thunkAPI.rejectWithValue(data.error);
      }
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNote.fulfilled, (state, action) => {
        state.loader = false;
        state.notes = action.payload.reverse();
      })
      .addCase(fetchNote.rejected, (state, action) => {
        state.notes = action.payload;
        state.loader = false;
      })
      .addCase(fetchNote.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(addNote.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(addNote.fulfilled, (state, action) => {
        state.notes.push(action.payload)
        state.loader = false
      })
      .addCase(addNote.rejected, (state, action) => {
        state.loader = false;
      })
     

      .addCase(removeNote.fulfilled, (state, action) => {
        state.loader = false;
        state.notes = state.notes.filter((item) =>{
       return item._id !== action.payload._id});
      })
      .addCase(removeNote.rejected, (state, action) => {
        state.loader = false;
      })
      .addCase(removeNote.pending, (state, action) => {
        state.loader = true;
      });
  },
});

export default noteSlice.reducer;
