import Image from 'next/image'
import React from 'react'
import Main from "@/assets/LandingPage/Dashboard/Main.png"

const Dashboard = () => {
    return (
        <div className=' w-full px-2 flex flex-col items-center gap-8'>
            <div className=' flex flex-col  md:gap-4 md:w-1/3'>
                <h1 className=' text-[ text-4xl text-center font-bold'>Real-time monitoring &</h1>
                <h1 className=' text-blue-600 text-4xl text-center font-bold'>energy consumption</h1>
                <p className='mt-4 text-base text-[#4B4B4B] text-center'>Our platform ensures reliability of data like temperature, vibration, energy usage, and Production tracking, defect logging,  and reporting.</p>
            </div>
            <div className=' md:w-2/3 flex md:flex-row gap-10'>
                <div className='hidden flex-[3] md:flex justify-center items-center'>
                    <Image src={Main} className=' w-[80%]' />
                </div>
                <div className=' flex-[2] flex flex-col gap-4'>
                    <div className=' w-full bg-white rounded-lg p-3 flex flex-row gap-3'>
                        <div className=' w-10 h-10 rounded-full bg-[#A0CCF1] bg-opacity-40'></div>
                        <div className=' flex-1 flex flex-col gap-2'>
                            <h1 className=' text-xl font-bold'>Tailored Data</h1>
                            <p>Track key metrics that matter most to your operations</p>
                        </div>
                    </div>
                    <div className=' w-full bg-white rounded-lg p-3 flex flex-row gap-3'>
                        <div className=' w-10 h-10 rounded-full bg-[#BCACF2] bg-opacity-40'></div>
                        <div className=' flex-1 flex flex-col gap-2'>
                            <h1 className=' text-xl font-bold'>Easy customization</h1>
                            <p>Adapt the platform to your specific manufacturing needs</p>
                        </div>
                    </div>
                    <div className=' w-full bg-white rounded-lg p-3 flex flex-row gap-3'>
                        <div className=' w-10 h-10 rounded-full bg-[#8AF0AD] bg-opacity-40'></div>
                        <div className=' flex-1 flex flex-col gap-2'>
                            <h1 className=' text-xl font-bold'>Efficiency analytics</h1>
                            <p>Get insights to improve production flow and reduce costs</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard