"use client";
import React from "react";

const page = () => {
  const handelSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value
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
            required
          />
          <input
            name="roll"
            type="number"
            className="border-4"
            placeholder="Class Roll..."
            required
          />
          <input
            name="reg"
            type="number"
            className="border-4"
            placeholder="Registration number..."
            required
          />
          <input
            name="number"
            type="number"
            className="border-4"
            placeholder="Mobile number"
            required
          />
          <input
            name="email"
            type="email"
            className="border-4"
            placeholder="email..."
            required
          />
          <input
            name="facebook"
            type="text"
            className="border-4"
            placeholder="Facebook Id link"
            required
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
            required
          />
          <input
            name="image"
            type="text"
            className="border-4"
            placeholder="Image link "
            required
          />
        </div>
        <button className="p-2 border-red-400 border-2 rounded-lg mt-5 w-48 font-bold">
          Submit
        </button>
      </form>
    </div>
  );
};

export default page;
