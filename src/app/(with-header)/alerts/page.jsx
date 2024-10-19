"use client"
import { useEffect, useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import getAlerts from "@/data/getAlerts";

export default function Home() {
    const [alerts, setAlerts] = useState([]);
    useEffect(() => {
        getAlerts().then((data) => {
            console.log(data);
            
            setAlerts(data);
        });
    }, []);
	return (
        <div className=" w-full h-full flex flex-col bg-white rounded-xl p-4 gap-4">
            <div className=" flex flex-row items-center justify-between px-4">
                <h1 className=" text-xl font-bold">Alerts</h1>
                <HiDotsVertical className=" cursor-pointer" size={25} />
            </div>
            <div className=" w-full flex-1 flex flex-col overflow-y-auto">
                <div className=" text-[#8B909A] text-lg w-full py-2 pl-4 flex flex-row bg-[#F8F9FA] gap-2">
                    <h1 className=" flex-[1]">Horodateur</h1>
                    <h1 className=" flex-[1]">Nom</h1>
                    <h1 className=" flex-[1]">Type</h1>
                    <h1 className=" flex-[1]">Status</h1>
                    <h1 className=" flex-[1]">Machine</h1>
                    <h1 className=" flex-[2]">Details</h1>
                </div>
                <div className=" w-full flex-1 flex flex-col overflow-y-scroll">
                    {
                        alerts.map((alert, index) => (
                            <div key={index} className=" text-base w-full py-2 pl-4 flex flex-row gap-2">
                                <h1 className=" flex-[1]">{alert.timeStamp}</h1>
                                <h1 className=" flex-[1]">{alert.title}</h1>
                                <h1 className=" flex-[1]">{alert.criticality}</h1>
                                <div className="  flex-[1] flex flex-row gap-2 items-center">
                                    <div className={`${alert.solved?"bg-vert":"bg-rouge"} h-[10px] aspect-square rounded-full `}></div>
                                    {
                                        alert.solved?
                                        <p className=" text-vert">Résolu</p>
                                        :
                                        <p className=" text-rouge">En attente</p>
                                    }
                                </div>
                                <h1 className=" flex-[1]">{alert.machineId}</h1>
                                <h1 className=" flex-[2]">{alert.description}</h1>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
	);
}
