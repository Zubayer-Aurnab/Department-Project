import Footer from "@/Components/Shared/Footer/Footer";
import NavBar from "@/Components/Shared/Nav/NavBar";
import { Collapse } from "antd";
import "./faq.css";

const page = () => {
  return (
    <div className="bg-[#FFF0F0]">
      <NavBar />

      <h1 className="text-4xl lg:text-4xl  pt-10  mb-10 font-bold text-center text-[#342E5C] ">
        FAQ
      </h1>

      <div className="px-3 lg:px-0 lg:w-4/5 mx-auto mt-20 lg:h-[40vh] space-y-5">
        <Collapse
          style={{ border: "1px solid #342E5C" }}
          size="large"
          items={[
            {
              key: "1",
              label: <p className=""> What is this website for ?</p>,
              children: (
                <p>
                  {" "}
                  - This website is for better connection of 10th batch of our
                  psychology department. You can find contact info of everyone
                  from our batch very easily.
                </p>
              ),
            },
          ]}
        />
        <Collapse
          style={{ border: "1px solid #342E5C" }}
          size="large"
          items={[
            {
              key: "2",
              label: <p className=""> Who is this website for ? ?</p>,
              children: (
                <p>
                  - This website is mainly for 10th batch of our psychology
                  department. But any other students or teacher can use it too.{" "}
                </p>
              ),
            },
          ]}
        />
        <Collapse
          style={{ border: "1px solid #342E5C" }}
          size="large"
          items={[
            {
              key: "2",
              label: <p className=""> What is the use of this website ?</p>,
              children: (
                <p>
                  - You can use this website to collect contact info of students
                  from 10th batch. You can collect roll, registration and blood
                  group too if needed.
                </p>
              ),
            },
          ]}
        />
      </div>
      <Footer />
    </div>
  );
};

export default page;
