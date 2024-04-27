"use client";
import { fetchSingleData } from "@/redux/features/StudentDetailsSlice/StudentDetailsSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const studentDetails = ({ params }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { studentDetails, isLoading, isError, error } = useSelector(
    (state) => state.studentDetails
  );
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    dispatch(fetchSingleData(params.id));
  }, [dispatch, params.id]);

  console.log(studentDetails);
  return (
    <div>
      <h1>Student Details {params.id} </h1>
    </div>
  );
};

export default studentDetails;
