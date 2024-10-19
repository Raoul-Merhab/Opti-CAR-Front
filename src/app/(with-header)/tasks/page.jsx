"use client";
import { useEffect, useState } from "react";
import getTasks from "@/data/getTasks";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

export default function Home() {
	const [tasks, setTasks] = useState([]);
	useEffect(() => {
		getTasks().then((tasks) => setTasks(tasks));
	}, []);
	const markDone = (index) => {
		const newTasks = [...tasks];
		newTasks[index].done = true;
		setTasks(newTasks);
	};

	return (
        <div className=" w-full h-full flex flex-row gap-5">
			<div className=" flex-[1] h-full flex flex-col p-4 gap-4 rounded-xl bg-[#ECECEC]">
				<h1 className=" text-xl font-bold">Scheduled tasks for today</h1>
				<div className=" flex flex-col gap-3">
					<p>{tasks.filter(task => task.done).length}/{tasks.length} completed</p>
					<div className=" w-full bg-slate-200 rounded-full h-2">
						<div style={{width:`${tasks.length===0?100:tasks.filter(task => task.done).length/tasks.length*100}%`}} className=" h-full rounded-full bg-bleu"></div>
					</div>
				</div>
				<div className=" flex flex-col flex-1 hide-scrollbar overflow-y-scroll gap-4">
					{
						tasks.map((task, index) => (
							<div key={index} className=" bg-[#F4F4F4] p-4 rounded-xl flex flex-col gap-2">
								<h1 className="text-lg font-semibold">{task.title}</h1>
								<p className=" text-sm">{task.description}</p>
								<div className=" flex flex-row justify-between gap-5 items-end">
									<div className=" flex flex-col flex-1">
										<div className=" flex flex-row gap-2 items-center">
											<FaClock color="#737373" />
											<p className=" text-base font-semibold text-[#737373]">{task.time}</p>
										</div>
										<div className=" flex flex-row gap-2 items-center">
											<FaMapMarkerAlt color="#737373" />
											<p className=" text-base font-semibold text-[#737373]">{task.location}</p>
										</div>
									</div>
									<div className="">
										{
											task.done?
											<div className=" w-8 h-8 flex justify-center items-center rounded-lg border-2 border-[#E2E8F0]">
												<FaCheck size={22} color="#0070FF" />
											</div>
											:
											<p onClick={()=>markDone(index)} className=" cursor-pointer bg-slate-200 py-2 px-2 w-fit rounded-lg">
												mark as done
											</p>
										}	
									</div>
								</div>
							</div>
						))
					}
				</div>
			</div>
			<div className=" flex-[1] h-full flex flex-col gap-4">
				<div className=" w-full flex flex-col gap-4 bg-white rounded-xl p-4">
					<h1 className=" font-bold text-xl">Create a Task</h1>
					<div className=" w-full flex flex-col gap-2">
						<div className=" flex flex-row text-base gap-4 items-center">
							<h1 className=" font-semibold w-1/6 text-end">Name</h1>
							<input type="text" className=" flex-1 py-1 px-3 border-gris rounded-xl outline-gris border-2" />
						</div>
						<div className=" flex flex-row text-base gap-4 items-center">
							<h1 className=" font-semibold w-1/6 text-end">Name</h1>
							<input type="text" className=" flex-1 py-1 px-3 border-gris rounded-xl outline-gris border-2" />
						</div>
						<div className=" flex flex-row text-base gap-4 items-center">
							<h1 className=" font-semibold w-1/6 text-end">Name</h1>
							<input type="text" className=" flex-1 py-1 px-3 border-gris rounded-xl outline-gris border-2" />
						</div>
						<div className=" flex flex-row text-base gap-4 items-center">
							<h1 className=" font-semibold w-1/6 text-end">Name</h1>
							<input type="text" className=" flex-1 py-1 px-3 border-gris rounded-xl outline-gris border-2" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
