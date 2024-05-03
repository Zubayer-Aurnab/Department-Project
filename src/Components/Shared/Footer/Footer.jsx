import Image from "next/image";
import logo from "../../../assets/logo.png"
import PSY_CLUB from "../../../assets/PSY_club.png"
import TC from "../../../assets/TC.png"
import { IoCall } from "react-icons/io5";
import { MdAttachEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { FaComputer } from "react-icons/fa6";
const Footer = () => {
    return (
        <div className="bg-[#FFF0F0] pt-32 ">
            <div className=" w-4/5 mx-auto text-[#342E5C]  flex justify-between">
                {/* 1st div-------------------------------------------->*/}
                <div className=" space-y-5 ">
                    <div>
                        <Image src={logo} alt="" className="w-52 ml-2" />
                    </div>
                    <div className="flex gap-10">
                        <Image src={PSY_CLUB} alt="" />
                        <Image src={TC} alt="" />
                    </div>
                </div>
                {/* 2nd div -------------------------------------------> */}
                <div className="space-y-20">
                    <div className="">
                        <h1 className="text-2xl font-semibold mb-3">Contact Psychology Department</h1>
                        <div className="flex items-center gap-2 text-xl font-medium mb-2">
                            <IoCall />
                            <div>
                                <p>+8801830848435</p>
                                <p>+8801722671226</p>
                            </div>
                        </div>
                        <p className="text-xl font-medium flex gap-2 items-center"> <MdAttachEmail /> psychologydept.tc@gmail.com</p>
                    </div>
                    <div className="">
                        <h1 className="text-2xl font-semibold mb-3">Contact Tejgaon College</h1>
                        <div className="flex items-center gap-2 text-xl font-medium mb-2">
                            <IoCall />
                            <div>
                                <p>(+88)-02-48113628 -48117008</p>
                        </div>
                    </div>
                    <p className="text-xl font-medium flex gap-2 items-center"> <MdAttachEmail /> tejgaoncollege@ymail.com </p>
                </div>
            </div>
            {/* 3rd div ------------------------------------------> */}
            <div>
                <h1 className="text-2xl font-semibold mb-3 ">Contact Us</h1>
                <div className="space-y-4">
                    <div>
                        <h1 className="text-xl font-medium underline" href="https://portfolio-6458b.web.app/">Zubayer Aurnab</h1>
                        <p className="text-[15px] font-bold">[Web Developer]</p>
                        <div className="mt-1">
                            <p className="font-bold flex items-center gap-2"><IoCall /> 01943-233153</p>
                            <p className="font-bold flex items-center gap-2"> <MdAttachEmail />zubayeraurnab@gmail.com</p>
                            <a className="font-bold flex items-center gap-2 underline" href="https://www.linkedin.com/in/zubayer-aurnab-500b0725a/"><BsLinkedin /> Zubayer Aurnab</a>
                            <a className="font-bold flex items-center gap-2 und" href="https://portfolio-6458b.web.app/"><FaComputer /> Portfolio</a>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h1 className="text-xl font-medium underline" href="https://portfolio-6458b.web.app/">Shadman Ishrak</h1>
                            <p className="text-[15px] font-bold">[UX/UI Designer]</p>
                            <div className="mt-1">
                                <p className="font-bold flex items-center gap-2"><IoCall /> 01687-328582</p>
                                <p className="font-bold flex items-center gap-2"> <MdAttachEmail />shadman.stc@gmail.com</p>
                                <a className="font-bold flex items-center gap-2 underline" href="https://www.linkedin.com/in/zubayer-aurnab-500b0725a/"><BsLinkedin /> Shadman Ishrak</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div >
    );
};

export default Footer;