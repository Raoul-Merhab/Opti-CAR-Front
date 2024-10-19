	"use client";
	import machineTypes from "@/constants/machineTypes";
	import { useEffect, useState } from "react";
	import units from "@/constants/units";
	import ajouterMachine from "@/data/ajouterMachine";
	import { useRouter } from "next/navigation";

	export default function Home() {
		const router = useRouter();
		const [machineName, setMachineName] = useState("");
		const [machineType, setMachineType] = useState("");
		const [machineThresholds, setMachineThresholds] = useState(null);
		const [loading, setLoading] = useState(false);
		const onChangeMachineName = (newValue) => {
			setMachineName(newValue);
		}
		
		const onChangeMachineType = (newValue) => {
			setMachineType(newValue);
			let temp = machineTypes.find((item) => item.name === newValue)?.limites
			let result = {}
			temp?.forEach((item) => {
				result[item.name] = {min: item.min, max: item.max}
			})
			setMachineThresholds(result)
		}
		const onClickConfirm = () => {
			if ( loading ){
				return;
			}
			if ( !machineName || !machineType ){
				alert("Please fill all the fields")
				return;
			}
			setLoading(true)
			ajouterMachine({
				machineName: machineName,
				machineType: machineType,
				machineThresholds: machineThresholds
			}).then(() => {
				alert("Machine added successfully")
				router.push("/")
				router.push("/machines")
				router.refresh()
				setLoading(false)
			}).catch(() => {
				alert("An error occured")
				setLoading(false)
			})
		}
		return (
			<div className=" w-full h-full flex flex-col p-5 gap-5">
				<h1 className=" font-bold text-2xl pl-4">Ajouter une machine</h1>
				<div className=" overflow-auto w-full flex-1 flex flex-col items-end bg-white rounded-xl p-4 gap-4">
					<div className=" w-full flex-1 flex flex-col gap-4 overflow-y-scroll">
						<div className=" flex flex-col w-1/3 gap-2 border-2 border-gris p-4 rounded-xl">
							<p className=" text-lg font-semibold">ID de la machine</p>
							<input value={machineName} onChange={(event)=>onChangeMachineName(event.target.value)} placeholder="#machine_ID" className=" border-gris border-2 w-full h-10 rounded-xl px-4 outline-gris" />
						</div>
						<div className=" flex flex-col w-1/3 gap-2 border-2 border-gris p-4 rounded-xl">
							<p className=" text-lg font-semibold">Type de la machine</p>
							<select value={machineType} onChange={(event)=>onChangeMachineType(event.target.value)} className=" border-gris border-2 w-full h-10 rounded-xl px-4 outline-gris">
								<option value={null} className=" bg-white hover"></option>
								{
									machineTypes.map((machineType, index) => (
										<option value={machineType.name} key={index} className="">{machineType.name}</option>
									))
								}
							</select>
						</div>
						{/* TO DO */}
						<div className=" flex flex-col w-full gap-2 border-2 border-gris p-4 rounded-xl">
							<p className=" text-lg font-semibold">Seuils de la machine</p>
							<p className=" text-md font-normal text-[#94A3B8]">Fixez les seuils des machine, ou laissez les valeurs par défaut</p>
							<div className=" flex flex-col gap-2">
								{
									machineTypes.find((item) => item.name === machineType)?.limites?.map((limite, index) => (
										<div key={index} className=" flex flex-row gap-4 items-center">
											<p className=" flex-1 text-lg font-semibold">{units[limite.name]?.name}</p>
											<div className=" flex-1 flex flex-row gap-4 items-center">
												<input value={machineThresholds?.[limite.name]?.min} onChange={(event)=>setMachineThresholds({...machineThresholds, [limite.name]:{...machineThresholds?.[limite.name], min: event.target.value}})} placeholder="Min" className=" border-gris border-2 w-1/3 h-10 rounded-xl px-4 outline-gris" />
												<p>{units[limite.name]?.unit}</p>
											</div>
											<div className=" flex-1 flex flex-row gap-4 items-center">
												<input value={machineThresholds?.[limite.name]?.max} onChange={(event)=>setMachineThresholds({...machineThresholds, [limite.name]:{...machineThresholds?.[limite.name], max: event.target.value}})} placeholder="Max" className=" border-gris border-2 w-1/3 h-10 rounded-xl px-4 outline-gris" />
												<p>{units[limite.name]?.unit}</p>
											</div>
										</div>
									))
								}
							</div>
						</div>
					</div>
					<div onClick={onClickConfirm} className=" cursor-pointer text-white text-lg font-semibold flex justify-center items-center rounded-xl w-fit bg-black h-10 px-8">
						{loading?"Loading...":"Confirmer"}
					</div>
				</div>
			</div>
		);
	}
