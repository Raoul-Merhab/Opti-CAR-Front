import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronDown, FaChevronUp, FaCheck } from "react-icons/fa6";
import { LineChart, XAxis, YAxis, Tooltip, Legend, Line, ResponsiveContainer } from 'recharts'

const EnergyDataRecap = () => {
	const [current, setCurrent] = useState("Live");
    const [open, setOpen] = useState(false);
    const router = useRouter();

    const data = [
        {
          "name": "A",
          "uv": 4000,
          "pv": 2400,
          "amt": 2400
        },
        {
          "name": "B",
          "uv": 3000,
          "pv": 1398,
          "amt": 2210
        },
        {
          "name": "C",
          "uv": 2000,
          "pv": 9800,
          "amt": 2290
        },
        {
          "name": "D",
          "uv": 2780,
          "pv": 3908,
          "amt": 2000
        },
        {
          "name": "E",
          "uv": 1890,
          "pv": 4800,
          "amt": 2181
        },
        {
          "name": "F",
          "uv": 2390,
          "pv": 3800,
          "amt": 2500
        },
        {
          "name": "G",
          "uv": 3490,
          "pv": 4300,
          "amt": 2100
        }
      ]
      

    const onClickDetailsEnergy = () => {
		router.push("/energy");
	}

    return (
        <div className=' w-full flex-[3] bg-white rounded-xl p-5 flex flex-col gap-3 '>
            <h1 className=" text-2xl font-semibold">Energy Consumption</h1>
            <div className=" w-full flex-1 flex flex-row gap-5">
                <div className=" flex-[1] h-full flex flex-col">
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
                            <div className=' p-2 cursor-pointer flex flex-row' onClick={()=>handleChangeTimeFrame("Last hour")}>
                                <div className=' h-6 w-6 flex items-center'>
                                    {
                                        current === "Last hour" && <FaCheck />
                                    }
                                </div>
                                <p>Last hour</p>
                            </div>
                            <div className=' p-2 cursor-pointer flex flex-row' onClick={()=>handleChangeTimeFrame("Last 24 hours")}>
                                <div className=' h-6 w-6 flex items-center'>
                                    {
                                        current === "Last 24 hours" && <FaCheck />
                                    }
                                </div>
                                <p>Last 24 hours</p>
                            </div>
                            <div className=' p-2 cursor-pointer flex flex-row' onClick={()=>handleChangeTimeFrame("Last 7 days")}>
                                <div className=' h-6 w-6 flex items-center'>
                                    {
                                        current === "Last 7 days" && <FaCheck />
                                    }
                                </div>
                                <p>Last 7 days</p>
                            </div>
                            <div className=' p-2 cursor-pointer flex flex-row' onClick={()=>handleChangeTimeFrame("Last 30 days")}>
                                <div className=' h-6 w-6 flex items-center'>
                                    {
                                        current === "Last 30 days" && <FaCheck />
                                    }
                                </div>
                                <p>Last 30 days</p>
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
                    <div className=" flex flex-col flex-1 justify-center gap-2">
                        <h1 className=" font-bold text-3xl text-[#2B3674]">200 kWh</h1>
                        <p className=" text-base text-[#A3AED0]">Total consumption</p>
                    </div>
                </div>
                <div className="flex-[3] h-full ">
                    <ResponsiveContainer width={"100%"} height={"100%"}>
                        <LineChart data={data}>
                            <XAxis dataKey={"name"} />
                            <Tooltip />
                            <Legend />
                            <Line legendType='none' type="monotone" dataKey="uv" stroke="#3354F4" strokeWidth={3} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div className=" flex flex-row justify-between">
                <div className=" flex flex-row gap-5">
                    <div className=" flex flex-col p-3 border-2 border-gris rounded-xl gap-2">
                        <h1 className=" text-3xl text-vert font-bold">-15%</h1>
                        <p className=" text-lg">comparing to last week</p>
                    </div>
                    <div className=" flex flex-col p-3 border-2 border-gris rounded-xl gap-2">
                        <h1 className=" text-3xl text-vert font-bold">-15%</h1>
                        <p className=" text-lg">comparing to last week</p>
                    </div>
                </div>
                <div onClick={onClickDetailsEnergy} className="px-4 cursor-pointer self-end flex flex-row items-center gap-3">
                    <p className=" text-lg font-semibold">Plus de détails</p>
                    <FaChevronRight size={15} color="#000" />
                </div>
            </div>
        </div>
  )
}

export default EnergyDataRecap