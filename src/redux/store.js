import { configureStore } from "@reduxjs/toolkit";
import StudentSlice from "./features/StudentSlice/StudentSlice";

export const store = configureStore({
  reducer: {
    studentData: StudentSlice,
  },
});
