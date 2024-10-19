    "use client"
    import { useEffect, useState } from "react";
    import { HiDotsVertical } from "react-icons/hi";
    import getAlerts from "@/data/getAlerts";
    import CircularProgress from '@mui/material/CircularProgress';
    import { BsExclamationTriangle } from "react-icons/bs";
    import { FaCheck, FaChevronRight } from "react-icons/fa6";
    import { useRouter } from "next/navigation";

    export default function Home() {
        const [alerts, setAlerts] = useState([]);
        const [loading, setLoading] = useState(true);
        useEffect(() => {
            getAlerts().then((data) => {
                console.log(data);
                setAlerts(data);
                setLoading(false)
            });
        }, []);
        return (
            <div className=" w-full h-full flex flex-col bg-white rounded-xl p-4 gap-4">
                <div className=" flex flex-row items-center justify-between px-4">
                    <h1 className=" text-xl font-bold">Alerts</h1>
                    <HiDotsVertical className=" cursor-pointer" size={25} />
                </div>
                <div className=" w-full flex-1 hidden md:flex flex-col overflow-y-auto">
                    <div className=" text-[#8B909A] text-lg w-full py-2 pl-4 flex flex-row bg-[#F8F9FA] gap-2">
                        <h1 className=" flex-[1]">Horodateur</h1>
                        <h1 className=" flex-[1]">Type</h1>
                        <h1 className=" flex-[1]">Machine</h1>
                        <h1 className=" flex-[2]">Details</h1>
                    </div>
                    <div className=" w-full flex-1 flex flex-col overflow-y-scroll">
                        {
                            loading?
                            <CircularProgress className=" mx-auto mt-4" />
                            :
                            alerts.length===0?
                            <div className=" w-full h-full flex items-center justify-center">
                                <p>No alerts</p>
                            </div>
                            :
                            alerts.map((alert, index) => (
                                <div key={index} className=" text-base w-full py-2 pl-4 flex flex-row gap-2">
                                    <h1 className=" flex-[1]">{alert.timeStamp}</h1>
                                    <div className={` flex-[1] w-fit py-1 px-3 rounded-lg items-center gap-2 flex flex-row ${alert.criticality==="Critical"?" bg-[#F4DDDD]":alert.criticality==="Moderate"?" bg-[#F4ECDD]":" bg-[#E0F7E9]"} `}>
                                        {
                                            alert.criticality==="Critical"?
                                            <BsExclamationTriangle color="#EC4E0B" />
                                            :alert.criticality==="Moderate"?
                                            <BsExclamationTriangle color="#EC9F0B" />
                                            :
                                            <BsExclamationTriangle color="#3BBF8C " />
                                        }
                                        <p className={` ${alert.criticality==="Critical"?" text-rouge":alert.criticality==="Moderate"?" text-orange":" text-vert"} font-semibold`}>{alert.criticality}</p>
                                    </div>
                                    <h1 className=" flex-[1]">{alert.machineId}</h1>
                                    <h1 className=" flex-[2]">{alert.description}</h1>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className=" w-full flex-1 overflow-y-scroll flex md:hidden flex-col gap-2">
                    {
                        alerts.map((alert, index) => (
                            <div key={index} className=" w-full flex flex-col gap-2 bg-[#F8F9FA] rounded-xl p-2">
                                <p className=" text-[#8B909A] text-sm">{alert.timeStamp}</p>
                                <h1 className=" text-lg font-semibold">{alert.machineId}</h1>
                                <p className={` ${alert.criticality==="Critical"?" text-rouge":alert.criticality==="Moderate"?" text-orange":" text-vert"} font-semibold`}>{alert.criticality}</p>
                                <p className=" text-[#8B909A] text-sm">{alert.description}</p>
                                
                                <div className=" flex flex-row items-center justify-between">
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
