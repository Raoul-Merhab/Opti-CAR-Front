"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Logo from "@/assets/logo.png"
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'

const Header = () => {
    const links = ["home", "machines", "alerts", "tasks", "energy"]

    const router = useRouter()
    const pathname = usePathname()

    const [current, setCurrent] = useState(links.indexOf(pathname.split("/")[1]))
    const options = [
        {
            label: 'Home',
            link: '/home'
        },
        {
            label: 'Machines',
            link: '/machines'
        },
        {
            label: 'Alerts',
            link: '/alerts'
        },
        {
            label: 'Tasks',
            link: '/tasks'
        },
        {
            label: 'Energy',
            link: '/energy'
        }
    ]
    const navgateTo = (index) => {
        setCurrent(index)
        router.push(options[index].link)
    }
    const onClickLogout = () => {
    }
    return (
        <div className=' h-[7%] w-full flex flex-row items-start justify-between'>
            <div className=' flex flex-row items-center gap-2'>
                <Image src={Logo} width={32} height={32} />
                <p className=' font-bold'>OPTICAR</p>
            </div>
            <div className=' bg-white rounded-lg flex flex-row h-10'>
                {
                    options.map((option, index) => {
                        return (
                            <div key={index} onClick={()=>navgateTo(index)} className={` ${current===index?"font-bold text-[#070707]":" font-normal text-[#606060]"} w-28 text-center border-black cursor-pointer px-4 py-2`}>
                                {option.label}
                            </div>
                        )
                    })
                }
            </div>
            <div onClick={onClickLogout} className=' cursor-pointer text-white font-bold bg-black h-8 px-4 rounded-lg flex justify-center items-center'>
                Log out
            </div>
        </div>
    )
}

export default Header