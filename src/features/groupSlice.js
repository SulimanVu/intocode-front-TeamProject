import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    groups: [],
}

export const fetchGroups = createAsyncThunk(
    'groups/fetch',
    async (_, thunkAPI) => {
        try {
            const res = await fetch("http://localhost:3000/group")
            const data = await res.json()
            return data
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

const groupsSlice = createSlice({
    name: 'group',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchGroups.fulfilled, (state, action) => {
            state.groups = action.payload
        })
    }
})

export default groupsSlice.reducer 