"use client";
import { useEffect, useState } from "react";
import { FaChevronRight, FaPlus } from "react-icons/fa6";
import getMachines from "@/data/getMachines";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import CircularProgress from '@mui/material/CircularProgress';

export default function MachineLayout({ children }) {
	const router = useRouter();
    const pathname = usePathname();
    
	const [machines, setMachines] = useState([]);
    const [current, setCurrent] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        machines.find((machine) => {
            if (pathname.split("/")[3] === machine.id){
                setCurrent(machine.id);
                return true;
            }else{
                setCurrent(null);
            }
        })
    }, [pathname, machines]);

    useEffect(() => {
        getMachines().then((data) => {
            setMachines(data??[]);
            if ( data ) setLoading(false);
        });
    }, []);
    
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         getMachines().then((data) => {
    //             if ( data ){
    //                 setMachines(data);
    //                 setLoading(false);
    //             }
    //         });
    //     }, 2000);

    //     return () => clearInterval(interval);
    // }, []);


	const onClickMachine = (machineID) => {
		setCurrent(machineID);
		router.push(`/machines/${machines.find(elt=>elt.id===machineID).name}/${machineID}`,{
            a: 1
        });
	}

	const onCLickAddMachine = () => {
		if ( machines.length === 6 ){
            alert("You can't add more than 6 machines");
            return;
        }
        setCurrent(null);
		router.push("/machines/ajouter");
	}


	return (
		<div className=" w-full h-full flex flex-col md:flex-row gap-5">
            <div className=" h-full flex-[2] bg-[#ECECEC] rounded-xl flex flex-col p-5 gap-5">
                <div className=" flex flex-row justify-between">
                    <h1 className=" font-semibold text-xl">Machines</h1>
                    <div onClick={onCLickAddMachine} className=" cursor-pointer w-8 h-8 bg-[#F4F4F4] flex justify-center items-center rounded-lg">
                        <FaPlus color="#000" size={20} />
                    </div>
                </div>
                <div className=" flex flex-col items-center gap-4 overflow-y-scroll hide-scrollbar">
                    {
                        loading?
                        <CircularProgress />
                        :
                        machines.length?
                        machines.map((machine, index) => (
                            <div onClick={()=>onClickMachine(machine.id)} key={index} className={` w-full ${current===machine.id?"bg-bleu":"bg-white	"} cursor-pointer px-4 py-2 rounded-lg flex flex-row gap-4 items-center justify-between`}>
                                <div className={` flex flex-col gap-2 ${current === machine.id?"text-white":"text-black"}`}>
                                    <h1 className=" font-semibold text-lg">{machine.name}</h1>
                                    <p className=" text-xs">#ID : {machine.id}</p>
                                </div>
                                <FaChevronRight color={current===machine.id?"#FFF":"#000"} size={20} />
                            </div>
                        ))
                        :
                        <p className=" text-center">No machines found</p>
                    }
                </div>
            </div>
            <div className=" h-full flex-[5] bg-[#ECECEC] rounded-xl">
				{children}
			</div>
		</div>
	);
}
