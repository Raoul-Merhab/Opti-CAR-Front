"use client"
import { useState, useEffect } from 'react'
import { LineChart, XAxis, YAxis, Tooltip, Legend, Line, ResponsiveContainer } from 'recharts'
import { FaChevronDown, FaChevronUp, FaCheck } from "react-icons/fa6";
import formatData from '@/helpers/formatData';
import units from '@/constants/units';
import getData from "@/data/getData";
import machineTypes from '@/constants/machineTypes';
import CircularProgress from '@mui/material/CircularProgress';

const Chart = ({nom, id}) => {

    let X = "timestamp";
    let Y = machineTypes.find((machine) => machine.name === nom).limites.map(elt=>(elt.name))
    const [currentY, setCurrentY] = useState(Y[0])
    const [open, setOpen] = useState(false);
    const [current, setCurrent] = useState("Live")
    const [data, setData] = useState([]);
    const [loading , setLoading] = useState(true);

    const durees = {
        Live:"-4m",
        "Last 30 minutes":"-30m",        
        "Last hour":"-1h",
        "Last 12 hours":"-12h",
        "Last 24 hours":"-1d"
    }

    useEffect(() => {
        if (current === "Live") {
            const interval = setInterval(() => {
                // setLoading(true);
                getData(id, durees[current]).then((data) => {
                    if ( data ){
                        setData(data);
                    }
                    if (data) setLoading(false);
                });
            }, 10000);
            return () => clearInterval(interval);
        }
    }, [current, id]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!loading) {
                clearInterval(interval);
            } else {
                getData(id, durees[current]).then((data) => {
                    setData(data ?? []);
                    if (data) setLoading(false);
                });
            }
        }, 3000);
        return () => clearInterval(interval);
    }, [loading, id, current]);

    const handleChangeTimeFrame = (newCurrent) => {
        if ( newCurrent === current ) return;
        setLoading(true);
        setCurrent(newCurrent)
        setOpen(false)
    }
    
    return (
    <div className=' bg-white rounded-2xl pr-6 py-6 w-full h-full flex flex-col gap-5'>
        <div className=' w-full pl-6 flex flex-row justify-between'>
            <div className=' flex flex-col'>
                <p className=' font-bold text-2xl'>{nom}</p>
                <p className=' text-[#8B909A] text-lg'>{current}</p>
            </div>
            <div className=' flex relative'>
                <div onClick={() => setOpen(!open)} className={` ${open?"rounded-t-xl ":"rounded-xl "} cursor-pointer p-2 w-40 h-10 border-2 border-[#CBD5E1] flex flex-row justify-between items-center`}>
                    <p className=' font-semibold'>{current}</p>
                    {
                        open?
                        <FaChevronUp/>
                        :
                        <FaChevronDown/>
                    }
                </div>
                <div style={{display:open?"flex":"none"}} className={` ${open?"rounded-b-xl":"rounded-xl"} z-10 absolute w-40 top-0 translate-y-10 flex flex-col bg-white border-2 border-[#CBD5E1]`}>
                    <div className=' p-2 cursor-pointer flex flex-row' onClick={()=>handleChangeTimeFrame("Live")}>
                        <div className=' h-6 w-6 flex items-center'>
                            {
                                current === "Live" && <FaCheck />
                            }
                        </div>
                        <p>Live</p>
                    </div>
                    <div className=' p-2 cursor-pointer flex flex-row' onClick={()=>handleChangeTimeFrame("Last 30 minutes")}>
                        <div className=' h-6 w-6 flex items-center'>
                            {
                                current === "Last 30 minutes" && <FaCheck />
                            }
                        </div>
                        <p>Last 30 minutes</p>
                    </div>
                    <div className=' p-2 cursor-pointer flex flex-row' onClick={()=>handleChangeTimeFrame("Last hour")}>
                        <div className=' h-6 w-6 flex items-center'>
                            {
                                current === "Last hour" && <FaCheck />
                            }
                        </div>
                        <p>Last hour</p>
                    </div>
                    <div className=' p-2 cursor-pointer flex flex-row' onClick={()=>handleChangeTimeFrame("Last 12 hours")}>
                        <div className=' h-6 w-6 flex items-center'>
                            {
                                current === "Last 12 hours" && <FaCheck />
                            }
                        </div>
                        <p>Last 12 hours</p>
                    </div>
                    <div className=' p-2 cursor-pointer flex flex-row' onClick={()=>handleChangeTimeFrame("Last 24 hours")}>
                        <div className=' h-6 w-6 flex items-center'>
                            {
                                current === "Last 24 hours" && <FaCheck />
                            }
                        </div>
                        <p>Last 24 hours</p>
                    </div>
                    <div className=' w-10/12 bg-gris h-[2px] self-center'>

                    </div>
                    <div className=' p-2 cursor-pointer flex flex-row' onClick={()=>handleChangeTimeFrame("Custom")}>
                        <div className=' h-6 w-6 flex items-center'>
                            {
                                current === "Custom" && <FaCheck />
                            }
                        </div>
                        <p>Custom</p>
                    </div>
                    
                </div>
            </div>
        </div>
        {/* <h1 className=' text-7xl text-bleu h-10'>{socket.connected?"true":"false"}</h1> */}
        <div className=' hide-scrollbar px-5 w-full overflow-x-scroll flex flex-row gap-2'>
            {
                Y.map((y, index) => (
                    <div key={index} onClick={() => setCurrentY(y)} className={` ${currentY === y?" border-b-bleu":"border-b-gris"} min-w-fit cursor-pointer py-2 px-5 border-b-2 flex flex-col `}>
                        <p className=' font-bold text-xl text-center'>{data[data.length-1]?data[data.length-1][y]:"-"} {units[y]?.unit}</p>
                        <p className=' text-center text-base'>{units[y]?.name}</p>
                    </div>
                ))
            }
        </div>
        <div className=' w-full flex-1 flex justify-center items-center'>
            {
                loading?
                <CircularProgress />
                :
                <ResponsiveContainer width={"100%"} height={"100%"}>
                    <LineChart data={formatData(data, X, currentY, current)}>
                        <XAxis dataKey={X} />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line legendType='plainline' type="monotone" dataKey={currentY} name={units[currentY]?.name} stroke="#3354F4" strokeWidth={3} />
                    </LineChart>
                </ResponsiveContainer>
            }
        </div>
    </div>
  )
}

export default Chart