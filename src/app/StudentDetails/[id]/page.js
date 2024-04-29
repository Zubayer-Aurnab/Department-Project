"use client";
import NavBar from "@/Components/Shared/Nav/NavBar";
import { fetchSingleData } from "@/redux/features/StudentDetailsSlice/StudentDetailsSlice";
import Image from "next/image";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaFacebook } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { MdMarkEmailRead } from "react-icons/md";
import { MdAddIcCall } from "react-icons/md";
import { Spin } from "antd";

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
    <div className="bg-[#FFF0F0] lg:h-screen">
      <NavBar />
      {isLoading ? (
        <Spin fullscreen size="large" />
      ) : (
        <div className="lg:w-4/5 px-4 lg:px-0 mx-auto flex justify-between flex-col-reverse lg:flex-row  mt-10 lg:mt-20 ">
          <div className="w-full">
            {/* part-1 */}
            <div className="text-[#342E5C] space-y-5 mt-5 lg:mt-0">
              <h1 className="text-3xl lg:text-5xl font-semibold">
                {studentDetails?.name}
              </h1>
              <p className="text-xl lg:text-2xl font-medium">
                Roll : {studentDetails?.roll}
              </p>
              <p className="text-xl lg:text-2xl font-medium">
                Session : {studentDetails?.session}
              </p>
              <p className="text-xl lg:text-2xl font-medium">
                Registration : {studentDetails?.reg}
              </p>
              <p className="text-xl lg:text-2xl font-medium">
                Blood Group : {studentDetails?.blood}
              </p>
            </div>
            {/* part-2 */}
            <div className="text-[#342E5C] space-y-5 mt-10">
              <h1 className="text-3xl lg:text-5xl font-semibold">Contacts</h1>
              <div className="flex gap-3">
                <MdAddIcCall className="text-xl lg:text-3xl" />
                <p className="text-xl lg:text-2xl font-medium">
                  Phone : {studentDetails?.number}
                </p>
              </div>
              <div className="flex gap-3">
                <BsWhatsapp className="text-xl lg:text-3xl" />
                <p className="text-xl lg:text-2xl font-medium">
                  Whatsapp : {studentDetails?.number}
                </p>
              </div>
              <div className="flex gap-3">
                <FaFacebook className="text-xl lg:text-3xl" />
                <p className="text-xl lg:text-2xl font-medium">
                  FB Profile :{" "}
                  <span>
                    <a className="underline" href={studentDetails?.facebook}>
                      {studentDetails?.name}{" "}
                    </a>
                  </span>
                </p>
              </div>
              <div className="flex gap-3">
                <MdMarkEmailRead className="text-xl lg:text-3xl" />
                <p className="text-xl lg:text-2xl font-medium ">
                  Email : {studentDetails?.email}
                </p>
              </div>
            </div>
          </div>
          <div className="lg:flex  lg:justify-end w-full">
            <Image
              alt=""
              src={studentDetails.image}
              width={1000}
              height={1000}
              className="w-full lg:w-1/2 object-cover rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default studentDetails;
