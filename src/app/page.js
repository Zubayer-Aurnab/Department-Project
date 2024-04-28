import NavBar from "@/Components/Shared/Nav/NavBar";
import Banner from "@/Components/UI/Banner/Banner";
import StudentCards from "@/Components/UI/StudentCards/StudentCards";

import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <>
      <div className="bg-[#FFF0F0] ">
        <NavBar />
        <Banner />
        <Toaster />
        <StudentCards />
      </div>
    </>
  );
}
