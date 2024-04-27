import { getData } from "@/redux/getApi";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  students: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchData = createAsyncThunk("student-data", async () => {
  const students = await getData();
  return students;
});

const StudentSlice = createSlice({
  name: "Student Data",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchData.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.students = payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default StudentSlice.reducer;
