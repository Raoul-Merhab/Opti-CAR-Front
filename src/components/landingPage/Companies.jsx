import React from 'react'
import Image from 'next/image'
import hyundai from '@/assets/LandingPage/manufacturers/hyundai.png'
import infiniti from '@/assets/LandingPage/manufacturers/infiniti.png'
import mitsubishi from '@/assets/LandingPage/manufacturers/mitsubishi.png'
import izuzu from '@/assets/LandingPage/manufacturers/izuzu.png'

const Companies = () => {
    return (
        <div className=" md:w-[50%] self-center">
            <h1 className="text-xl font-bold text-center">Companies that trust us</h1>
            <div className="  flex flex-row gap-10">
                <div className=' flex-1 aspect-square flex justify-center items-center'>
                    <Image src={hyundai} className=' w-full' />
                </div>
                <div className=' flex-1 aspect-square flex justify-center items-center'>
                    <Image src={izuzu} className=' w-full' />
                </div>
                <div className=' flex-1 aspect-square flex justify-center items-center'>
                    <Image src={mitsubishi} className=' w-2/3' />
                </div>
                <div className=' flex-1 aspect-square flex justify-center items-center'>
                    <Image src={infiniti} className=' w-full' />
                </div>
            </div>
        </div>
    )
}

export default Companies