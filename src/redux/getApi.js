import axios from "axios";

export const getData = async (search) => {
  console.log(search)
  const res = axios.get(
    `http://localhost:5000/all-students-get?search=${search?search:{}}`
  );
  return (await res).data;
};
