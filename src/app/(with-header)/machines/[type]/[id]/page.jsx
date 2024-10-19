"use client"
import Chart from "@/components/Chart";
import { usePathname } from "next/navigation";
import { useParams } from "next/navigation";

export default function Home() {
	const params = useParams();
	let id = params.id;
	let type = params.type;
	
	while ( type.includes("%20") ) {
		type = type.replace("%20", " ");
	}

	return (
        <div className=" w-full h-full flex flex-col justify-center items-center p-8 gap-4">
			<Chart nom={type} id={id}  />
			<div className=" cursor-pointer text-white bg-black text-xl px-4 py-2 rounded-lg self-end">Générer rapport</div>
		</div>
	);
}
