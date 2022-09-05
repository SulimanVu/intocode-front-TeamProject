import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  students: [],
};

export const fetchStudents = createAsyncThunk(
  "students/fetch",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:3000/students");
      const data = await res.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addStudent = createAsyncThunk(
  "students/add",
  async ({ name, surname, image, group, email }, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:3000/student", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${thunkAPI.getState().application.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, surname, image, group, email }),
      });
      const data = await res.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const removeStudent = createAsyncThunk(
  "students/remove",
  async (id, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:3000/student/${id}`, {
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
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const studentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudents.fulfilled, (state, action) => {
        state.students = action.payload;
      })
      .addCase(addStudent.fulfilled, (state, action) => {
        state.students.push(action.payload);
      })
      .addCase(removeStudent.fulfilled, (state, action) => {
        state.students = state.students.filter(
          (student) => student._id !== action.payload
        );
      });
  },
});

export default studentsSlice.reducer;
