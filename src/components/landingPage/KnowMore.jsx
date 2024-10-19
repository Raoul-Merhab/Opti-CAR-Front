import Image from 'next/image'
import React from 'react'
import KnowMoreImage from '@/assets/LandingPage/KnowMoreImage.png'

const KnowMore = () => {
    return (
        <div className=' relative w-full flex items-center justify-center px-5 py-20 bg-[#12141D]'>
            <div className=' w-40 h-40 bg-[#008EFF] rounded-full absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2'></div>
            <div className=' md:w-[70%] flex flex-row gap-10'>
                <div className='md:flex hidden flex-1'>
                    <Image src={KnowMoreImage}/>
                </div>
                <div className=' flex-1 flex flex-col gap-6'>
                    <h1 className=' text-white text-4xl font-bold'>Know More About Opti-CAR</h1>
                    <p className=' text-gris'>The startup behind this smart analytics platform specializes in advanced data solutions for manufacturing. With a focus on optimizing factory operations, they use cutting-edge technology to monitor machines, predict maintenance needs, and improve production efficiency. Their mission is to empower manufacturers with real-time insights, helping them reduce downtime, increase productivity, and drive sustainability through smarter energy management.</p>
                    <div className=' flex flex-row gap-6'>
                        <div className=' flex flex-col gap-2'>
                            <p className=' text-bleu font-bold text-4xl'>4.5/5</p>
                            <p className=' text-white'>Customer rating</p>
                        </div>
                        <div className=' flex flex-col gap-2'>
                            <p className=' text-bleu font-bold text-4xl'>425</p>
                            <p className=' text-white'>Security testing</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KnowMore