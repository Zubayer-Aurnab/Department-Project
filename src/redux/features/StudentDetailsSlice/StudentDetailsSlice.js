import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  studentDetails: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchSingleData = createAsyncThunk(
  "fetchSingleData",
  async (id) => {
    const res = await axios.get(
      `https://psychology-10-batch.vercel.app/all-students-get/${id}`
    );
    console.log(res.data);
    return res.data;
  }
);

const StudentDetailsSlice = createSlice({
  name: "StudentDetailsSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleData.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchSingleData.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.studentDetails = payload;
      })
      .addCase(fetchSingleData.rejected, (state, { error }) => {
        state.isLoading = false;
        state.isError = true;
        state.error = error?.message;
      });
  },
});
export default StudentDetailsSlice.reducer;
