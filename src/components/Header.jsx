"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Logo from "@/assets/logo.png"
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { FaBars, FaTimes } from 'react-icons/fa' 

const Header = () => {
    const links = ["home", "machines", "alerts", "tasks", "energy"]

    const router = useRouter()
    const pathname = usePathname()

    const [current, setCurrent] = useState(links.indexOf(pathname.split("/")[1]))
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false) 
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
        setMobileMenuOpen(false) 
    }
    const onClickLogout = () => {
    }

    return (
        <div className='h-[7%] w-full flex flex-row items-start justify-between px-4 md:px-8 relative'>
            
            <div className='flex flex-row items-center gap-2'>
                <Image src={Logo} width={32} height={32} />
                <p className='font-bold'>OPTICAR</p>
            </div>
            
            
            <div className='hidden md:flex bg-white rounded-lg flex-row h-10'>
                {options.map((option, index) => (
                    <div
                        key={index}
                        onClick={() => navgateTo(index)}
                        className={` ${current === index ? "font-bold text-[#070707]" : " font-normal text-[#606060]"} w-28 text-center border-black cursor-pointer px-4 py-2`}
                    >
                        {option.label}
                    </div>
                ))}
            </div>

            
            <div className='md:hidden flex items-center'>
                <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className='text-black text-2xl'>
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

           
            <div onClick={onClickLogout} className='hidden md:flex cursor-pointer text-white font-bold bg-black h-8 px-4 rounded-lg justify-center items-center'>
                Log out
            </div>

            
            {isMobileMenuOpen && (
                <div
                    className='fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col items-center justify-center space-y-6 shadow-lg'
                    style={{ transition: 'opacity 0.3s ease' }} 
                >
                    
                    <button
                        onClick={() => setMobileMenuOpen(false)}
                        className='absolute top-6 right-6 text-black text-2xl'
                    >
                        <FaTimes />
                    </button>

                    {options.map((option, index) => (
                        <div
                            key={index}
                            onClick={() => navgateTo(index)}
                            className={` ${current === index ? "font-bold text-black" : " font-normal text-gray-600"} text-xl cursor-pointer`}
                        >
                            {option.label}
                        </div>
                    ))}
                    <div onClick={onClickLogout} className='cursor-pointer text-white font-bold bg-red-500 w-40 py-2 rounded-lg text-center'>
                        Log out
                    </div>
                </div>
            )}
        </div>
    )
}

export default Header
