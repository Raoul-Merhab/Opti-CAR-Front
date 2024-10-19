"use client";
import EnergyDataRecap from "@/components/main/EnergyDataRecap";
import TasksRecap from "@/components/main/TasksRecap";
import AlertsRecap from "@/components/main/AlertsRecap";

export default function Home() {
	
	
	return (
		<div className=" flex flex-row w-full h-full gap-5">
			<div className=" flex-[3] h-full flex flex-col gap-5">
				<EnergyDataRecap />
				<div className=" w-full flex-[2] hide-scrollbar overflow-x-scroll flex flex-col flex-wrap gap-4">
					<div className=" bg-white w-1/2 h-full rounded-xl"></div>
					<div className=" bg-white w-1/2 h-full rounded-xl"></div>
					<div className=" bg-white w-1/2 h-full rounded-xl"></div>
					<div className=" bg-white w-1/2 h-full rounded-xl"></div>
					<div className=" bg-white w-1/2 h-full rounded-xl"></div>
					<div className=" bg-white w-1/2 h-full rounded-xl"></div>
					<div className=" bg-white w-1/2 h-full rounded-xl"></div>
					<div className=" bg-white w-1/2 h-full rounded-xl"></div>
					<div className=" bg-white w-1/2 h-full rounded-xl"></div>
					<div className=" bg-white w-1/2 h-full rounded-xl"></div>
					<div className=" bg-white w-1/2 h-full rounded-xl"></div>
					<div className=" bg-white w-1/2 h-full rounded-xl"></div>
					<div className=" bg-white w-1/2 h-full rounded-xl"></div>
					<div className=" bg-white w-1/2 h-full rounded-xl"></div>
					<div className=" bg-white w-1/2 h-full rounded-xl"></div>
				</div>
			</div>
			<AlertsRecap />
			<TasksRecap />
						
		</div>
	);
}
