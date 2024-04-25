"use client";

import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const page = () => {
  const handelSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const roll = form.roll.value;
    const reg = form.reg.value;
    const number = form.number.value;
    const email = form.email.value;
    const facebook = form.facebook.value;
    const linkedin = form.linkedin.value;
    const blood = form.blood.value;
    const image = form.image.value;

    if (
      name === "" ||
      roll === "" ||
      reg === "" ||
      number === "" ||
      email === "" ||
      facebook === "" ||
      blood === "" ||
      image === ""
    ) {
      toast.error("You must fill out all the fields", {
        duration: 3000,
      });
      return;
    }

    const data = {
      name,
      roll,
      reg,
      number,
      email,
      facebook,
      linkedin,
      blood,
      image,
      session: "2020-21",
    };

    const res = await axios.post("http://localhost:5000/all-students", {
      data,
    });
    if (res.data.insertedId || res.data.acknowledge) {
      toast.success("Student added successfully");
      form.reset();
    }
  };

  return (
    <div>
      <form onSubmit={handelSubmit} className=" mt-10 border-8 p-10  gap-5">
        <h1>Add Student</h1>
        <div className="flex flex-wrap gap-8 mt-5">
          <input
            name="name"
            type="text"
            className="border-4"
            placeholder="name..."
          />
          <input
            name="roll"
            type="number"
            className="border-4"
            placeholder="Class Roll..."
          />
          <input
            name="reg"
            type="number"
            className="border-4"
            placeholder="Registration number..."
          />
          <input
            name="number"
            type="number"
            className="border-4"
            placeholder="Mobile number"
          />
          <input
            name="email"
            type="email"
            className="border-4"
            placeholder="email..."
          />
          <input
            name="facebook"
            type="text"
            className="border-4"
            placeholder="Facebook Id link"
          />
          <input
            name="linkedin"
            type="text"
            className="border-4"
            placeholder="Linkedin id link"
          />
          <input
            name="blood"
            type="text"
            className="border-4"
            placeholder="Blood Group "
          />
          <input
            name="image"
            type="text"
            className="border-4"
            placeholder="Image link "
          />
        </div>
        <button className="p-2 border-red-400 border-2 rounded-lg mt-5 w-48 font-bold">
          Submit
        </button>
      </form>
      <Toaster />
    </div>
  );
};

export default page;
