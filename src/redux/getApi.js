import axios from "axios";

export const getData = async (search) => {
  console.log(search)
  const res = axios.get(
    `https://psychology-10-batch.vercel.app
/all-students-get?search=${search?search:{}}`
  );
  return (await res).data;
};
