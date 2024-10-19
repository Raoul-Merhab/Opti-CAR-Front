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
        <div className="w-full mt-5 md:mt-0 h-full flex flex-col md:flex-row gap-5">
       
            <div className="flex-1 h-full flex flex-col p-4 gap-4 rounded-xl bg-gray-100 shadow-md">
                <h1 className="text-2xl font-bold">Scheduled Tasks for Today</h1>

               
                <div className="flex flex-col gap-3">
                    <p className="text-gray-700 font-medium">{tasks.filter(task => task.done).length}/{tasks.length} completed</p>
                    <div className="w-full bg-gray-300 rounded-full h-2">
                        <div 
                            style={{ width: `${tasks.length === 0 ? 100 : (tasks.filter(task => task.done).length / tasks.length) * 100}%` }} 
                            className="h-full rounded-full bg-blue-500 transition-all duration-500"
                        ></div>
                    </div>
                </div>

              
                <div className="flex-1 flex flex-col gap-4 overflow-y-auto hide-scrollbar">
                    {tasks.map((task, index) => (
                        <div key={index} className="bg-white p-4 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                            <h1 className="text-lg font-semibold">{task.title}</h1>
                            <p className="text-sm text-gray-600">{task.description}</p>
                            
                            <div className="flex flex-row justify-between items-end mt-2">
                                
                                <div className="flex flex-col flex-1 gap-1">
                                    <div className="flex flex-row gap-2 items-center text-gray-500">
                                        <FaClock />
                                        <p className="text-base font-medium">{task.time}</p>
                                    </div>
                                    <div className="flex flex-row gap-2 items-center text-gray-500">
                                        <FaMapMarkerAlt />
                                        <p className="text-base font-medium">{task.location}</p>
                                    </div>
                                </div>

                             
                                <div>
                                    {task.done ? (
                                        <div className="w-8 h-8 flex justify-center items-center rounded-lg border-2 border-gray-300">
                                            <FaCheck size={22} color="#0070FF" />
                                        </div>
                                    ) : (
                                        <button 
                                            onClick={() => markDone(index)} 
                                            className="cursor-pointer bg-gray-200 py-2 px-3 text-sm font-medium text-gray-700 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
                                        >
                                            Mark as done
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex-1 h-full flex flex-col gap-4">
                <div className="w-full flex flex-col gap-4 bg-white rounded-xl p-6 shadow-md">
                    <h1 className="font-bold text-2xl">Create a Task</h1>
                    
                 
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-row gap-4 items-center">
                            <h1 className="font-semibold w-1/4 text-end">Name</h1>
                            <input type="text" className="flex-1 py-2 px-4 border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-400" placeholder="Task name" />
                        </div>
                        <div className="flex flex-row gap-4 items-center">
                            <h1 className="font-semibold w-1/4 text-end">Description</h1>
                            <input type="text" className="flex-1 py-2 px-4 border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-400" placeholder="Task description" />
                        </div>
                        <div className="flex flex-row gap-4 items-center">
                            <h1 className="font-semibold w-1/4 text-end">Time</h1>
                            <input type="text" className="flex-1 py-2 px-4 border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-400" placeholder="12:00 PM" />
                        </div>
                        <div className="flex flex-row gap-4 items-center">
                            <h1 className="font-semibold w-1/4 text-end">Location</h1>
                            <input type="text" className="flex-1 py-2 px-4 border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-400" placeholder="Location" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
