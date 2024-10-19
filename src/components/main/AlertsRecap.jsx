import { useEffect, useState } from "react";
import { BsExclamationTriangle } from "react-icons/bs";
import getAlerts from "@/data/getAlerts";
import { FaCheck, FaChevronRight } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import CircularProgress from '@mui/material/CircularProgress';

const AlertsRecap = () => {
    const router = useRouter();
	const [alerts, setAlerts] = useState([]);
    const [loading, setLoading] = useState(true);
	
	useEffect(() => {
		getAlerts().then((data) => {
            return data.filter(alert => !alert.solved)
		}).then((data) => {
            setAlerts(data);
            setLoading(false)
		});
	}, []);
    // useEffect(() => {
    //     getAlerts().then((data) => {
    //         console.log(data);
    //         setAlerts(data);
    //         setLoading(false)
    //     });
    // }, []);
	
    const onClickAllAlerts = () => {
		router.push("/alerts");
	}
	
    return (
        <div className=" flex-[1] h-full bg-white rounded-xl p-5 flex flex-col gap-5">
            <h1 className=" text-xl font-bold">Alerts</h1>
            <div className=" flex flex-col flex-1 hide-scrollbar overflow-y-scroll">
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
                        <div key={index} className=" flex flex-col gap-2">
                            <div className={` w-fit py-1 px-3 rounded-lg items-center gap-2 flex flex-row ${alert.criticality==="Critical"?" bg-[#F4DDDD]":alert.criticality==="Moderate"?" bg-[#F4ECDD]":" bg-[#E0F7E9]"} `}>
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
                            <h2 className=" text-lg font-semibold">{alert.title}</h2>
                            <p className=" text-sm">{alert.description}</p>
                            <p className=" text-sm font-bold text-[#737373]">Machine ID: {alert.machineId}</p>
                            <div style={{display:index===(alerts.length-1)?"none":"block"}} className=" h-[2px] bg-gris w-full my-2"></div>
                        </div>
                    ))
                }
            </div>
            <div onClick={onClickAllAlerts} className="px-4 cursor-pointer self-end">Lire tout {">>"}</div>
        </div>
    )
}

export default AlertsRecap