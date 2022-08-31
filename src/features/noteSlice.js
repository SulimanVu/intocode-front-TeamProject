import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  notes: [],
  loader: false
};

export const fetchNote = createAsyncThunk(
  "Note/fetch",
  async (student, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:3000/notes/${student}`);
      const data = await res.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addNote = createAsyncThunk(
  "note/add",
  async ({student, notes}, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:3000/note`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${thunkAPI.getState().application.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ student, notes}),
      });
      const data = await res.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const removeNote = createAsyncThunk(
  "note/remove",
  async (student, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:3000/note/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${thunkAPI.getState().application.token}`,
          "Content-Type": "application/json",
        },
      })
      const data = await res.json();
      if (data.error) {
        return thunkAPI.rejectWithValue(data.error);
      }
      return id
    } catch (error) {
        return thunkAPI.rejectWithValue(error);       
    }
  }
);

const applicationSlice = createSlice({
    name:'application',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
        .addCase(fetchNote.fulfilled, (state, action) => {
            state.error = null;
            state.token = action.payload.token;
        })
        .addCase(fetchNote.rejected, (state, action) => {
            state.error = action.payload;
        })
        .addCase(fetchNote.pending, (state, action) => {
            state.error = action.payload;
        })
        .addCase(addNote.fulfilled, (state, action) => {
            state.error = null;
            state.token = action.payload.token;
        })
        .addCase(addNote.rejected, (state, action) => {
            state.error = action.payload;
        })
        .addCase(addNote.pending, (state, action) => {
            state.error = action.payload;
        })
        .addCase(removeNote.fulfilled, (state, action) => {
            state.error = null;
            state.token = action.payload.token;
        })
        .addCase(removeNote.rejected, (state, action) => {
            state.error = action.payload;
        })
        .addCase(removeNote.pending, (state, action) => {
            state.error = action.payload;
        })
    }
})

export default applicationSlice.reducer