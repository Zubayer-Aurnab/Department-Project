import { configureStore } from "@reduxjs/toolkit";
import StudentSlice from "./features/StudentSlice/StudentSlice";
import StudentDetailsSlice from "./features/StudentDetailsSlice/StudentDetailsSlice";

export const store = configureStore({
  reducer: {
    studentData: StudentSlice,
    studentDetails: StudentDetailsSlice,
  },
});
