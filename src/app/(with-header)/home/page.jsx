"use client";
import EnergyDataRecap from "@/components/main/EnergyDataRecap";
import TasksRecap from "@/components/main/TasksRecap";
import AlertsRecap from "@/components/main/AlertsRecap";

import { MdArrowOutward } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

export default function Home() {
  return (
    <div className="py-4 md:py-0  flex md:flex-row flex-col w-full md:h-full gap-5">
      <div className=" md:flex-[3]  md:h-full flex flex-col gap-5">
        <EnergyDataRecap />

        <div className=" w-full md:flex-[2]  hide-scrollbar overflow-x-scroll flex md:flex-row  gap-4">
          <div className="md:p-6 p-4 bg-white md:w-1/2 w-48 flex-shrink-0 h-48 md:h-full rounded-xl">

		<div className="flex justify-between items-center">
			<div className="flex flex-col items-start gap-4 ">
              <h1 className="font-bold w-1/3 md:w-auto text-lg  md:text-xl">Welding Robot</h1> 
           </div>
		   <MdArrowOutward className="text-2xl md:text-3xl"/>   
		</div>   

		 <div className="flex flex-row items-center gap-2">
		 <FaCheckCircle className="text-lg md:text-xl text-[#05CD99]"/>
		 <p className=" text-[#05CD99] font-semibold text-sm">Nothing to signal</p>
		 </div>
			
          </div>
          <div className=" bg-white md:w-1/2 w-48 flex-shrink-0 h-48 md:h-full rounded-xl"></div>
          <div className=" bg-white md:w-1/2 w-48 flex-shrink-0 h-48 md:h-full rounded-xl"></div>
          <div className=" bg-white md:w-1/2 w-48 flex-shrink-0 h-48 md:h-full rounded-xl"></div>
          <div className=" bg-white md:w-1/2 w-48 flex-shrink-0 h-48 md:h-full rounded-xl"></div>
          <div className=" bg-white md:w-1/2 w-48 flex-shrink-0 h-48 md:h-full rounded-xl"></div>
          <div className=" bg-white md:w-1/2 w-48 flex-shrink-0 h-48 md:h-full rounded-xl"></div>
          <div className=" bg-white md:w-1/2 w-48 flex-shrink-0 h-48 md:h-full rounded-xl"></div>
        </div>
      </div>
      <AlertsRecap />
      <TasksRecap />
    </div>
  );
}
