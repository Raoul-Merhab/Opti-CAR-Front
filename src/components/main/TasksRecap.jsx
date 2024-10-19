import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import getTasks from "@/data/getTasks";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

const TasksRecap = () => {
	const router = useRouter();
    const [tasks, setTasks] = useState([]);
    
    useEffect(() => {
		getTasks().then((data) => {
			setTasks(data);
		});
	}, []);
    const markDone = (index) => {
		const newTasks = [...tasks];
		newTasks[index].done = true;
		setTasks(newTasks);
	};
    
    
    const onClickAllTasks = () => {
		router.push("/tasks");
	}
	
	
    return (
        <div className=" flex-[1] h-full bg-white rounded-xl p-5 flex flex-col gap-5">
            <h1 className=" text-xl font-bold">Scheduled tasks for today</h1>
            <div className=" flex flex-col gap-3">
                <p>{tasks.filter(task => task.done).length}/{tasks.length} completed</p>
                <div className=" w-full bg-slate-200 rounded-full h-2">
                    <div style={{width:`${tasks.length===0?100:tasks.filter(task => task.done).length/tasks.length*100}%`}} className=" h-full rounded-full bg-bleu"></div>
                </div>
            </div>
            <div className=" flex flex-col flex-1 hide-scrollbar overflow-y-scroll">
                {
                    tasks.map((task, index) => (
                        <div key={index} className=" flex flex-col gap-2">
                            <h1 className="text-lg font-semibold">{task.title}</h1>
                            <p className=" text-sm">{task.description}</p>
                            <div className=" flex flex-row justify-end gap-5">
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
                            <div style={{display:index===(tasks.length-1)?"none":"block"}} className=" h-[2px] bg-gris w-full my-2"></div>
                        </div>
                    ))
                }
            </div>
            <div onClick={onClickAllTasks} className="px-4 cursor-pointer self-end">Lire tout {">>"}</div>
        </div>
    )
}

export default TasksRecap