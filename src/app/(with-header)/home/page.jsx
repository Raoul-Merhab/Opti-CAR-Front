"use client";
import EnergyDataRecap from "@/components/main/EnergyDataRecap";
import TasksRecap from "@/components/main/TasksRecap";
import AlertsRecap from "@/components/main/AlertsRecap";
import { MdArrowOutward } from "react-icons/md";

export default function Home() {	
	return (
		<div className=" flex flex-col md:flex-row w-full h-full gap-5">
			<div className=" flex-[3] h-full flex flex-col gap-5">
				<EnergyDataRecap />
				<div className=" w-full flex-[2] hide-scrollbar overflow-x-scroll flex flex-row md:grid md:grid-cols-3 md:grid-rows-2 gap-4">
					<div className=" bg-white flex flex-col justify-between w-full h-full rounded-xl p-4">
						<div className=" flex flex-row justify-between">
							<div className=" flex flex-col">
								<h1 className=" text-base font-bold">Welding robot</h1>
								<div className=" flex flex-row items-center gap-2">
									<div className=" h-2 w-2 rounded-full bg-vert"></div>
									<p className=" text-vert">Nothing to signal</p>
								</div>
							</div>
							<MdArrowOutward size={25} className=" cursor-pointer" />
						</div>
						<div className=" flex flex-row">
							<div className=" flex-1 flex flex-col items-center">
								<h1 className=" font-bold">10A</h1>
								<p className=" text-sm">current</p>
							</div>
							<div className=" flex-1 flex flex-col items-center">
								<h1 className=" font-bold">22V</h1>
								<p className=" text-sm">Voltage</p>
							</div>
							<div className=" flex-1 flex flex-col items-center">
								<h1 className=" font-bold">22Sec</h1>
								<p className=" text-sm">Time</p>
							</div>
						</div>
					</div>
					<div className=" bg-white flex flex-col justify-between w-full h-full rounded-xl p-4">
						<div className=" flex flex-row justify-between">
							<div className=" flex flex-col">
								<h1 className=" text-base font-bold">Stamping Presses</h1>
								<div className=" flex flex-row items-center gap-2">
									<div className=" h-2 w-2 rounded-full bg-vert"></div>
									<p className=" text-vert">Nothing to signal</p>
								</div>
							</div>
							<MdArrowOutward size={25} className=" cursor-pointer" />
						</div>
						<div className=" flex flex-row">
							<div className=" flex-1 flex flex-col items-center">
								<h1 className=" font-bold">10A</h1>
								<p className=" text-sm">current</p>
							</div>
							<div className=" flex-1 flex flex-col items-center">
								<h1 className=" font-bold">22V</h1>
								<p className=" text-sm">Voltage</p>
							</div>
							<div className=" flex-1 flex flex-col items-center">
								<h1 className=" font-bold">22Sec</h1>
								<p className=" text-sm">Time</p>
							</div>
						</div>
					</div>
					<div className=" bg-white flex flex-col justify-between w-full h-full rounded-xl p-4">
						<div className=" flex flex-row justify-between">
							<div className=" flex flex-col">
								<h1 className=" text-base font-bold">Painting Robots</h1>
								<div className=" flex flex-row items-center gap-2">
									<div className=" h-2 w-2 rounded-full bg-vert"></div>
									<p className=" text-vert">Nothing to signal</p>
								</div>
							</div>
							<MdArrowOutward size={25} className=" cursor-pointer" />
						</div>
						<div className=" flex flex-row">
							<div className=" flex-1 flex flex-col items-center">
								<h1 className=" font-bold">10A</h1>
								<p className=" text-sm">current</p>
							</div>
							<div className=" flex-1 flex flex-col items-center">
								<h1 className=" font-bold">22V</h1>
								<p className=" text-sm">Voltage</p>
							</div>
							<div className=" flex-1 flex flex-col items-center">
								<h1 className=" font-bold">22Sec</h1>
								<p className=" text-sm">Time</p>
							</div>
						</div>
					</div>
					<div className=" bg-white flex flex-col justify-between w-full h-full rounded-xl p-4">
						<div className=" flex flex-row justify-between">
							<div className=" flex flex-col">
								<h1 className=" text-base font-bold">Automated Guided Vehicles (AGVs)</h1>
								<div className=" flex flex-row items-center gap-2">
									<div className=" h-2 w-2 rounded-full bg-vert"></div>
									<p className=" text-vert">Nothing to signal</p>
								</div>
							</div>
							<MdArrowOutward size={25} className=" cursor-pointer" />
						</div>
						<div className=" flex flex-row">
							<div className=" flex-1 flex flex-col items-center">
								<h1 className=" font-bold">10A</h1>
								<p className=" text-sm">current</p>
							</div>
							<div className=" flex-1 flex flex-col items-center">
								<h1 className=" font-bold">22V</h1>
								<p className=" text-sm">Voltage</p>
							</div>
							<div className=" flex-1 flex flex-col items-center">
								<h1 className=" font-bold">22Sec</h1>
								<p className=" text-sm">Time</p>
							</div>
						</div>
					</div>
					<div className=" bg-white flex flex-col justify-between w-full h-full rounded-xl p-4">
						<div className=" flex flex-row justify-between">
							<div className=" flex flex-col">
								<h1 className=" text-base font-bold">CNC Machines (Milling, Lathes, Drilling) </h1>
								<div className=" flex flex-row items-center gap-2">
									<div className=" h-2 w-2 rounded-full bg-vert"></div>
									<p className=" text-vert">Nothing to signal</p>
								</div>
							</div>
							<MdArrowOutward size={25} className=" cursor-pointer" />
						</div>
						<div className=" flex flex-row">
							<div className=" flex-1 flex flex-col items-center">
								<h1 className=" font-bold">10A</h1>
								<p className=" text-sm">current</p>
							</div>
							<div className=" flex-1 flex flex-col items-center">
								<h1 className=" font-bold">22V</h1>
								<p className=" text-sm">Voltage</p>
							</div>
							<div className=" flex-1 flex flex-col items-center">
								<h1 className=" font-bold">22Sec</h1>
								<p className=" text-sm">Time</p>
							</div>
						</div>
					</div>
					<div className=" bg-white flex flex-col justify-between w-full h-full rounded-xl p-4">
						<div className=" flex flex-row justify-between">
							<div className=" flex flex-col">
								<h1 className=" text-base font-bold">Leak Test Machines(Sealing and Pressure Testing)</h1>
								<div className=" flex flex-row items-center gap-2">
									<div className=" h-2 w-2 rounded-full bg-vert"></div>
									<p className=" text-vert">Nothing to signal</p>
								</div>
							</div>
							<MdArrowOutward size={25} className=" cursor-pointer" />
						</div>
						<div className=" flex flex-row">
							<div className=" flex-1 flex flex-col items-center">
								<h1 className=" font-bold">10A</h1>
								<p className=" text-sm">current</p>
							</div>
							<div className=" flex-1 flex flex-col items-center">
								<h1 className=" font-bold">22V</h1>
								<p className=" text-sm">Voltage</p>
							</div>
							<div className=" flex-1 flex flex-col items-center">
								<h1 className=" font-bold">22Sec</h1>
								<p className=" text-sm">Time</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<AlertsRecap />
			<TasksRecap />	
		</div>
	);
}
