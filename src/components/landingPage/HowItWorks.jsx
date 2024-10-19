import React from "react";
import Image from "next/image";
import icone1 from "@/assets/icone1.svg";
import icone2 from "@/assets/icone2.svg";
import icone3 from "@/assets/icone3.svg";
import arrow from "@/assets/arrow.svg";

const HowItWorks = () => {
  return (
    <div className=" w-full flex flex-col gap-8 px-2">
      <div className=" flex flex-col gap-3">
        <h1 className=" text-center text-4xl font-bold">
          How OPTICAR Works
        </h1>
        <p className=" text-base text-center">
          Data accuracy, data vizualization, Tracking & monitoring
        </p>
      </div>
      <div className=" md:w-[60%] self-center flex md:flex-row flex-col gap-8 justify-between  ">
        <div className="flex flex-col justify-center  gap-3 items-center md:w-36">
          <div className="flex justify-center items-center relative w-32 h-32 bg-blue-600 rounded-full">
            <div className="text-white p-2 flex justify-center  items-center w-8 h-8 border border-white bg-blue-600 rounded-full absolute top-2 right-2">
              1
            </div>
            <Image src={icone1} className="p-12 w-full" />
          </div>
          <h1 className="text-center font-bold">Ensure Data Accuracy</h1>
          <p className="text-[12px] text-center">
            Ensuring data accuracy is crucial for making informed decisions and
            ensuring the reliability.
          </p>
        </div>

        <div className="hidden md:flex justify-center items-center relative  rounded-full">
          <Image src={arrow} className="p-12 w-full" />
        </div>

        <div className="flex flex-col justify-center  gap-3 items-center md:w-36">
          <div className="flex justify-center items-center relative w-32 h-32 bg-[#6F4BE5] rounded-full">
            <div className="text-white p-2 flex justify-center  items-center w-8 h-8 border border-white bg-[#6F4BE5] rounded-full absolute top-2 right-2">
              2
            </div>
            <Image src={icone2} className="p-12 w-full" />
          </div>
          <h1 className="text-center font-bold">Better Data Vizualization</h1>
          <p className="text-[12px] text-center">
            Ensuring data accuracy is crucial for making informed decisions and
            ensuring the reliability.
          </p>
        </div>

        <div className=" hidden md:flex justify-center items-center relative  rounded-full">
          <Image src={arrow} className="p-12 w-full" />
        </div>

        <div className="flex flex-col justify-center  gap-3 items-center md:w-36">
          <div className="flex justify-center items-center relative w-32 h-32 bg-[#12141D] rounded-full">
            <div className="text-white p-2 flex justify-center  items-center w-8 h-8 border border-white bg-[#12141D] rounded-full absolute top-2 right-2">
              3
            </div>
            <Image src={icone3} className="p-12 w-full" />
          </div>
          <h1 className="text-center font-bold">Ensure Data Accuracy</h1>
          <p className="text-[12px] text-center">
            Ensuring data accuracy is crucial for making informed decisions and
            ensuring the reliability.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
