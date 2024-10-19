import Chart from "@/components/Chart";

export default function Home() {
	const nom = "Welding Robot Reports - #welding_robot_006";
	const data = [
	      {
	        "timeStamp": "2024-10-12T10:50:00Z",
	        "weld_temperature": 4000,
	        "weld_voltage": 2400,
	        "gas_flow_rate": 2400
	      },
	      {
	        "timeStamp": "2024-10-13T11:50:00Z",
	        "weld_temperature": 3000,
	        "weld_voltage": 1398,
	        "gas_flow_rate": 2210
	      },
	      {
	        "timeStamp": "2024-10-14T12:50:00Z",
	        "weld_temperature": 2000,
	        "weld_voltage": 9800,
	        "gas_flow_rate": 2290
	      },
	      {
	        "timeStamp": "2024-10-15T13:50:00Z",
	        "weld_temperature": 2780,
	        "weld_voltage": 3908,
	        "gas_flow_rate": 2000
	      },
	      {
	        "timeStamp": "2024-10-16T14:50:00Z",
	        "weld_temperature": 1890,
	        "weld_voltage": 4800,
	        "gas_flow_rate": 2181
	      },
	      {
	        "timeStamp": "2024-10-17T15:50:00Z",
	        "weld_temperature": 2390,
	        "weld_voltage": 3800,
	        "gas_flow_rate": 2500
	      },
	      {
	        "timeStamp": "2024-10-18T16:50:00Z",
	        "weld_temperature": 3490,
	        "weld_voltage": 4300,
	        "gas_flow_rate": 2100
	      }
	]

	return (
        <div className=" w-full h-full flex flex-col justify-center items-center p-8 gap-4">
			<Chart nom={nom} data={data} X={"timeStamp"} Y={["weld_temperature", "weld_voltage", "gas_flow_rate"]} />
			<div className=" cursor-pointer text-white bg-black text-xl px-4 py-2 rounded-lg self-end">Générer rapport</div>
		</div>
	);
}
