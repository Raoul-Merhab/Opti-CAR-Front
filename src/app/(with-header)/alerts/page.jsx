"use client";
import { useEffect, useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import getAlerts from "@/data/getAlerts";

export default function Home() {
    const [alerts, setAlerts] = useState([]);

    useEffect(() => {
        getAlerts().then((data) => {
            setAlerts(data);
        });
    }, []);

	return (
        <div className="w-full h-full flex flex-col mt-5 bg-white rounded-xl p-4 gap-4">
            
            <div className="flex flex-row items-center justify-between px-4">
                <h1 className="text-xl font-bold">Alerts</h1>
                <HiDotsVertical className="cursor-pointer" size={25} />
            </div>

            {/* pour grand ecran */}
            <div className="w-full flex-1 flex flex-col overflow-y-auto">
                
                <div className="hidden md:flex text-[#8B909A] text-lg w-full py-2 pl-4 flex-row bg-[#F8F9FA] gap-2">
                    <h1 className="flex-[1]">Horodateur</h1>
                    <h1 className="flex-[1]">Nom</h1>
                    <h1 className="flex-[1]">Type</h1>
                    <h1 className="flex-[1]">Status</h1>
                    <h1 className="flex-[1]">Machine</h1>
                    <h1 className="flex-[2]">Détails</h1>
                </div>

                
                <div className="w-full flex-1 flex flex-col overflow-y-scroll">
                    {
                        alerts.map((alert, index) => (
                            <div 
                                key={index} 
                                className="flex flex-col md:flex-row text-base w-full md:py-2 p-4 gap-8 border-b last:border-b-0 md:border-none"
                            >
                                {/* grand */}
                                <h1 className="hidden md:flex flex-[1]">{alert.timeStamp}</h1>
                                <h1 className="hidden md:flex flex-[1]">{alert.title}</h1>
                                <h1 className="hidden md:flex flex-[1]">{alert.criticality}</h1>
                                <div className="hidden md:flex flex-[1] flex-row gap-2 items-center">
                                    <div className={`${alert.solved ? "bg-vert" : "bg-rouge"} h-[10px] aspect-square rounded-full`}></div>
                                    {
                                        alert.solved ?
                                            <p className="text-vert">Résolu</p>
                                            :
                                            <p className="text-rouge">En attente</p>
                                    }
                                </div>
                                <h1 className="hidden md:flex flex-[1]">{alert.machineId}</h1>
                                <h1 className="hidden md:flex flex-[2]">{alert.description}</h1>

                                {/* petti */}
                                <div className="md:hidden flex flex-col gap-2 bg-[#F8F9FA] p-3 rounded-lg">
                                    <div><strong>Horodateur:</strong> {alert.timeStamp}</div>
                                    <div><strong>Nom:</strong> {alert.title}</div>
                                    <div><strong>Type:</strong> {alert.criticality}</div>
                                    <div className="flex items-center gap-2">
                                        <strong>Status:</strong>
                                        <div className={`${alert.solved ? "bg-vert" : "bg-rouge"} h-[10px] aspect-square rounded-full`}></div>
                                        <span>{alert.solved ? "Résolu" : "En attente"}</span>
                                    </div>
                                    <div><strong>Machine:</strong> {alert.machineId}</div>
                                    <div><strong>Détails:</strong> {alert.description}</div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
	);
}
