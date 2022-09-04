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
      const res = await fetch(`http://localhost:3000/note`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${thunkAPI.getState().application.token}`,
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
  async (student, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:3000/note/${student}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${thunkAPI.getState().application.token}`,
          "Content-Type": "application/json",
        },
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
  name: "application",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    ////////////////Вывод////////////////////
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
      /////////////Добавление///////////////////
      .addCase(addNote.fulfilled, (state, action) => {
        state.loader = false;
        console.log(action.payload);
        state.notes.unshift(action.payload);
      })
      .addCase(addNote.rejected, (state, action) => {
        state.loader = false;
      })
      .addCase(addNote.pending, (state, action) => {
        state.loader = true;
        state.notes = action.payload
      })
      ////////////Удаление/////////////////////
      .addCase(removeNote.fulfilled, (state, action) => {
        state.loader = false;
        state.notes = state.notes.filter((item) => item._id !== action.payload);
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
