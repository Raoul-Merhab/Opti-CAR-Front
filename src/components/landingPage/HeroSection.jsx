"use client"
import Image from 'next/image'
import Logo from '@/assets/Logo.png'
import Main from '@/assets/LandingPage/Main.png'
import { useRouter } from 'next/navigation'

const HeroSection = () => {
    const router = useRouter()
    const onClickGetStarted = () => {
        router.push('/login')
    }

    return (
        <div className='w-full flex flex-col bg-[#12141D] hide-scrollbar pb-10'>
            <div className='w-full px-[20%] py-5 flex flex-row justify-between items-center'>
                <div className=' flex flex-row items-center gap-4'>
                    <Image src={Logo} alt="Logo" width={40} height={40} className='filter invert' />
                    <h1 className=' cursor-default text-white font-bold text-2xl'>Opti CAR</h1>
                </div>
                <div className=' flex flex-row gap-10 text-[#BAB7B7]'>
                    <p className=' cursor-pointer'>Home</p>
                    <p className=' cursor-pointer'>Service</p>
                    <p className=' cursor-pointer'>Resources</p>
                    <p className=' cursor-pointer'>About us</p>
                </div>
                <div className=' cursor-pointer bg-[#2B59FF] text-white px-4 py-2 rounded-2xl'>
                    Contact us
                </div>
            </div>
            <div className='w-full flex flex-col gap-5 items-center'>
                <div className=' w-full flex flex-col items-center gap-2'>
                    <h1 className=' text-center  text-[#2B59FF] text-4xl font-bold'>Monitor & track</h1>
                    <h1 className=' text-center text-white text-4xl font-bold'>your car factory</h1>
                    <h1 className=' text-center text-white text-4xl font-bold'>with OptiCar</h1>
                </div>
                <p className=' w-[40%] text-[#B4B5B8] text-center'>Data analysis software is a type of software tool used for data analysis and reporting. It is designed to help businesses, organizations, and individuals process, visualize,</p>
                <button onClick={onClickGetStarted} className=' py-2 px-6 text-xl bg-[#2B59FF] text-white rounded-3xl'>Get Started Free</button>
                <Image src={Main} className=' w-1/2'/>
            </div>
        </div>
    )
}

export default HeroSection