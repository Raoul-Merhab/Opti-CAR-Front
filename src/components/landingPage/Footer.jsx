import React from 'react'
import Image from 'next/image'
import Logo from "@/assets/Logo.png"

const Footer = () => {
  return (
    <div className=' w-full bg-[#12141D] flex flex-col py-5 items-center gap-5'>
        <div className=' w-[80%] flex flex-col md:flex-row gap-10 md:gap-5'>
            <div className=' flex-[3] flex flex-col gap-4'>
                <div className=' w-full flex flex-row gap-2 items-center'>
                    <Image src={Logo} className=' w-[10%] filter invert' />
                    <h1 className=' text-white font-bold text-xl'>Opti-CAR</h1>
                </div>
                <p className=' w-[60%] text-[#B9B3B3]'>Data analysis software is a type of software tool used for data analysis and reporting.</p>
                <div className=' flex flex-row gap-4'>
                    <div className=' bg-gris w-10 aspect-square rounded-full'></div>
                    <div className=' bg-gris w-10 aspect-square rounded-full'></div>
                    <div className=' bg-gris w-10 aspect-square rounded-full'></div>
                    <div className=' bg-gris w-10 aspect-square rounded-full'></div>
                </div>
            </div>
            <div className=' flex-[1] flex flex-col gap-5'>
                <h1 className=' text-[#FAFAFA] text-lg'>Company</h1>
                <div className=' flex flex-col text-[#B9B3B3] gap-2'>
                    <p className=' text-base cursor-pointer'>Service</p>
                    <p className=' text-base cursor-pointer'>Resources</p>
                    <p className=' text-base cursor-pointer'>About us</p>
                </div>
            </div>
            <div className=' flex-[1] flex flex-col gap-5'>
                <h1 className=' text-[#FAFAFA] text-lg'>Help</h1>
                <div className=' flex flex-col text-[#B9B3B3] gap-2'>
                    <p className=' text-base cursor-pointer'>Customer Support</p>
                    <p className=' text-base cursor-pointer'>Terms & Conditions</p>
                    <p className=' text-base cursor-pointer'>Privacy Policy</p>
                </div>
            </div>
        </div>
        <div className=' w-[80%] h-[2px] bg-[#8A8A8A]'></div>
        <p className=' text-[#FAFAFA] text-center'>© Copyright 2024, All Rights Reserved by Opti-CAR</p>
    </div>
  )
}

export default Footer