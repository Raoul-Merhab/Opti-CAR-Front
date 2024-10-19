"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Logo from "@/assets/Logo.png"
import handleLogin from "@/data/handleLogin";
import CircularProgress from '@mui/material/CircularProgress';
import TokenCookies from "@/cookies/TokenCookies";

export default function Home() {
	const router = useRouter();
	const [username, setusername] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	
	const onClickContinuer = async () => {
		setLoading(true);
		await handleLogin(username, password).then(res=>{
			if ( res.status ){
				TokenCookies.setToken(res.data.token);
				router.push("/home");
				setLoading(false);
			} else {
				setLoading(false);
				alert("Username or password is incorrect!");
			}
		})
	}
	const onClickForgotPW = async () => {
		// router.push("/forgotPassword");
	}

	return (
		<div className=" w-full h-full flex items-center px-[10%] bg-bleu">
			<div className=" bg-white rounded-xl w-1/2 h-fit py-5 px-9 flex flex-col gap-8">
				<div className=" flex flex-col gap-2">
					<div className=" flex flex-row items-center text-center gap-3">
						<Image src={Logo} width={25} height={25} />
						<h1 className=" text-2xl font-bold">OPTICAR</h1>
					</div>
					<p className=" text-[#A3AED0]">Enter your username and password to log in!</p>
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
				<div className=" w-full flex flex-row">
					{
						loading ?
						<div className=" w-full flex justify-center items-center">
							<CircularProgress />
						</div>
						:
						<div onClick={onClickContinuer} className=" w-full bg-bleu text-white text-center text-xl py-2 rounded-xl cursor-pointer">
							Login
						</div>
					}
					<div onClick={onClickForgotPW} className=" w-full bg-white text-bleu font-bold text-center text-xl py-2 rounded-xl cursor-pointer">
						Forget password?
					</div>
				</div>
			</div>
		</div>
	);
}