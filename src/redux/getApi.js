import axios from "axios";

export const getData = async () => {
  const res = axios.get("http://localhost:5000/all-students-get");
  return (await res).data;
};
