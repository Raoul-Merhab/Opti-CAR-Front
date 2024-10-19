"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Logo from "@/assets/Logo.png"

export default function Home() {
	const router = useRouter();
	const [username, setusername] = useState("");
	const [password, setPassword] = useState("");
	
	const onClickContinuer = async () => {
		router.push("/home");
	}
	const onClickForgotPW = async () => {
		// router.push("/forgotPassword");
	}

	return (
		<div className=" w-full h-full flex items-center justify-center px-4 md:px-[10%] bg-[#ECECEC]">
			<div className=" bg-white rounded-xl md:w-1/2 h-fit py-5 md:px-9 px-4 flex flex-col gap-8">
				<div className=" flex flex-col gap-2  justify-center items-center">
					<div className=" flex flex-row items-center text-center gap-3">
						<Image src={Logo} width={25} height={25} />
						<h1 className=" text-2xl font-bold">OPTICAR</h1>
					</div>
					<p className=" text-[#A3AED0] text-center">Enter your username and password to log in!</p>
					<div className=" w-full h-px bg-[#A3AED0]"></div>
				</div>
				<div className=" flex flex-col gap-4">
					<div className=" text-[#2B3674] flex flex-col gap-2">
						<h1 className=" text-lg font-bold pl-2">Username</h1>
						<input value={username} onChange={(event)=>setusername(event.target.value)} type="text" className=" border-2 border-gris outline-gris p-2 text-base rounded-lg" />
					</div>
					<div className=" text-[#2B3674] flex flex-col gap-2">
						<h1 className=" text-lg font-bold pl-2">Mot de passe</h1>
						<input value={password} onChange={(event)=>setPassword(event.target.value)} type="password" className=" border-2 border-gris outline-gris p-2 text-base rounded-lg" />
					</div>
				</div>
				<div className=" w-full flex flex-row gap-4">
					<div onClick={onClickContinuer} className="font-semibold w-full bg-bleu text-white text-center md:text-xl py-2 rounded-xl cursor-pointer">
						Login
					</div>
					<div onClick={onClickForgotPW} className=" w-full bg-white text-bleu font-bold text-center md:text-xl py-2 rounded-xl cursor-pointer">
						Forget password?
					</div>
				</div>
			</div>
		</div>
	);
}