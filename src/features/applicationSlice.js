import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    error: null,
    token: localStorage.getItem("token"),
}

export const SignIn = createAsyncThunk('auth/signin', async ({ login, password }, thunkAPI) => {
    try {
        const res = await fetch('http://localhost:3000/admin/login', {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ login, password })
        })
        const token = await res.json()

        if (token.error) {
            return thunkAPI.rejectWithValue(token.error)
        }
        localStorage.setItem('token', token); // token.token?

        return token;
    } catch (error) {
        thunkAPI.rejectWithValue(error);
    }
})

const applicationSlice = createSlice({
    name:'application',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
        .addCase(SignIn.fulfilled, (state, action) => {
            state.error = null;
            state.token = action.payload;
        })
        .addCase(SignIn.rejected, (state, action) => {
            state.error = action.payload;
        })
    }
})

export default applicationSlice.reducer