"use client"
import { useState } from 'react'
import { MdOutlineSecurity } from "react-icons/md";
import { BiNetworkChart } from "react-icons/bi";
import { TiFlowSwitch } from "react-icons/ti";
import { FiChrome } from "react-icons/fi";
import { GrAnnounce } from "react-icons/gr";
import { GoCodeReview } from "react-icons/go";

const Functionnalities = () => {
    const [hovered, sethovered] = useState(null)
    return (
        <div className=' self-center w-[80%] flex flex-col items-center gap-10'>
            <div className=' w-full flex flex-col gap-4 items-center'>
                <h1 className=' md:w-1/2 self-center text-center font-semibold text-4xl'>Explore Our Smart Analytics Platform for <span className=' text-bleu'>Car Manufacturing</span> Operations</h1>
                <p className=' md:w-1/3 text-center text-[#4B4B4B] font-semibold'>Optimize performance, reduce downtime, and enhance quality with smart analytics.</p>
            </div>
            <div className=' w-full flex flex-col gap-4'>
                <div className=' w-full flex flex-col  md:flex-row gap-4'>
                    <div onMouseEnter={()=>sethovered(0)} onMouseLeave={()=>sethovered(null)} className={` p-4 flex-1 flex flex-col rounded-xl gap-5 border-2 ${hovered === 0?" hover:border-bleu hover:bg-bleu":"bg-[#FAFAFA] border-[#E3E3E3]"}`}>
                        <div className={` rounded-full w-14 aspect-square flex justify-center items-center ${hovered===0?" bg-white":"bg-[#FAFAFA]"}`}>
                            <MdOutlineSecurity size={30} className={` ${hovered===0?"text-bleu ":"text-black"}`} />
                        </div>
                        <div className={` w-full flex flex-col ${hovered===0?" text-white":"text-black"} gap-2`}>
                            <h1 className=' font-bold text-xl'>Machine Monitoring</h1>
                            <p>Track key machine metrics like temperature, vibration, and tool wear to prevent downtime</p>
                        </div>
                    </div>
                    <div onMouseEnter={()=>sethovered(1)} onMouseLeave={()=>sethovered(null)} className={` p-4 flex-1 flex flex-col rounded-xl gap-5 border-2 ${hovered === 1?" hover:border-bleu hover:bg-bleu":"bg-[#FAFAFA] border-[#E3E3E3]"}`}>
                        <div className={` rounded-full w-14 aspect-square flex justify-center items-center ${hovered===1?" bg-white":"bg-[#FAFAFA]"}`}>
                            <BiNetworkChart size={30} className={` ${hovered===1?"text-bleu ":"text-black"}`} />
                        </div>
                        <div className={` w-full flex flex-col ${hovered===1?" text-white":"text-black"} gap-2`}>
                            <h1 className=' font-bold text-xl'>Real-Time Tracking</h1>
                            <p>Monitor production progress in real time to quickly address bottlenecks and delays.</p>
                        </div>
                    </div>
                    <div onMouseEnter={()=>sethovered(2)} onMouseLeave={()=>sethovered(null)} className={` p-4 flex-1 flex flex-col rounded-xl gap-5 border-2 ${hovered === 2?" hover:border-bleu hover:bg-bleu":"bg-[#FAFAFA] border-[#E3E3E3]"}`}>
                        <div className={` rounded-full w-14 aspect-square flex justify-center items-center ${hovered===2?" bg-white":"bg-[#FAFAFA]"}`}>
                            <TiFlowSwitch size={30} className={` ${hovered===2?"text-bleu ":"text-black"}`} />
                        </div>
                        <div className={` w-full flex flex-col ${hovered===2?" text-white":"text-black"} gap-2`}>
                            <h1 className=' font-bold text-xl'>Timely Alerts</h1>
                            <p>Receive instant notifications of machine issues to act fast and avoid disruptions.</p>
                        </div>
                    </div>
                    <div onMouseEnter={()=>sethovered(3)} onMouseLeave={()=>sethovered(null)} className={` p-4 flex-1 flex flex-col rounded-xl gap-5 border-2 ${hovered === 3?" hover:border-bleu hover:bg-bleu":"bg-[#FAFAFA] border-[#E3E3E3]"}`}>
                        <div className={` rounded-full w-14 aspect-square flex justify-center items-center ${hovered===3?" bg-white":"bg-[#FAFAFA]"}`}>
                            <FiChrome size={30} className={` ${hovered===3?"text-bleu ":"text-black"}`} />
                        </div>
                        <div className={` w-full flex flex-col ${hovered===3?" text-white":"text-black"} gap-2`}>
                            <h1 className=' font-bold text-xl'>Machine Monitoring</h1>
                            <p>Track key machine metrics like temperature, vibration, and tool wear to prevent downtime</p>
                        </div>
                    </div>
                </div>
                <div className=' self-center md:w-1/2 flex md:flex-row flex-col gap-4'>
                    <div onMouseEnter={()=>sethovered(4)} onMouseLeave={()=>sethovered(null)} className={` p-4 flex-1 flex flex-col rounded-xl gap-5 border-2 ${hovered === 4?" hover:border-bleu hover:bg-bleu":"bg-[#FAFAFA] border-[#E3E3E3]"}`}>
                        <div className={` rounded-full w-14 aspect-square flex justify-center items-center ${hovered===4?" bg-white":"bg-[#FAFAFA]"}`}>
                            <GrAnnounce size={30} className={` ${hovered===4?"text-bleu ":"text-black"}`} />
                        </div>
                        <div className={` w-full flex flex-col ${hovered===4?" text-white":"text-black"} gap-2`}>
                            <h1 className=' font-bold text-xl'>Energy Monitoring</h1>
                            <p>Monitor energy consumption across machines to reduce costs and improve sustainability.</p>
                        </div>
                    </div>
                    <div onMouseEnter={()=>sethovered(5)} onMouseLeave={()=>sethovered(null)} className={` p-4 flex-1 flex flex-col rounded-xl gap-5 border-2 ${hovered === 5?" hover:border-bleu hover:bg-bleu":"bg-[#FAFAFA] border-[#E3E3E3]"}`}>
                        <div className={` rounded-full w-14 aspect-square flex justify-center items-center ${hovered===5?" bg-white":"bg-[#FAFAFA]"}`}>
                            <GoCodeReview size={30} className={` ${hovered===5?"text-bleu ":"text-black"}`} />
                        </div>
                        <div className={` w-full flex flex-col ${hovered===5?" text-white":"text-black"} gap-2`}>
                            <h1 className=' font-bold text-xl'>Maintenance Scheduling</h1>
                            <p>Schedule routine maintenance tasks based on machine use to avoid breakdowns and delays.</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Functionnalities