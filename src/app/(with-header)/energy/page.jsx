import { LineChart, XAxis, YAxis, Tooltip, Legend, Line } from "recharts";
export default function Home() {
	const data = [
		{
		  "name": "Page A",
		  "uv": 4000,
		  "pv": 2400,
		  "amt": 2400
		},
		{
		  "name": "Page B",
		  "uv": 3000,
		  "pv": 1398,
		  "amt": 2210
		},
		{
		  "name": "Page C",
		  "uv": 2000,
		  "pv": 9800,
		  "amt": 2290
		},
		{
		  "name": "Page D",
		  "uv": 2780,
		  "pv": 3908,
		  "amt": 2000
		},
		{
		  "name": "Page E",
		  "uv": 1890,
		  "pv": 4800,
		  "amt": 2181
		},
		{
		  "name": "Page F",
		  "uv": 2390,
		  "pv": 3800,
		  "amt": 2500
		},
		{
		  "name": "Page G",
		  "uv": 3490,
		  "pv": 4300,
		  "amt": 2100
		}
	  ]
	return (
        <div className=" w-full h-full bg-[#ECECEC] rounded-xl p-5 flex flex-col gap-5">
			<h1 className=" font-bold text-2xl">Energy Consumption Dashboard</h1>
			<div className=" w-full flex flex-col">
				<div className=" w-full flex flex-row gap-4">
					<div className=" p-3 flex-1 bg-white flex flex-col gap-3 rounded-xl border-2 border-gris">
						<h1 className={` text-2xl font-bold text-vert`}>-15%</h1>
						<p>comparing to last week</p>
					</div>
					<div className=" p-3 flex-1 bg-white flex flex-col gap-3 rounded-xl border-2 border-gris">
						<h1 className={` text-2xl font-bold text-vert`}>-15%</h1>
						<p>comparing to last week</p>
					</div>
					<div className=" p-3 flex-1 bg-white flex flex-col gap-3 rounded-xl border-2 border-gris">
						<h1 className={` text-2xl font-bold text-vert`}>-15%</h1>
						<p>comparing to last week</p>
					</div>
					<div className=" p-3 flex-1 bg-white flex flex-col gap-3 rounded-xl border-2 border-gris">
						<h1 className={` text-2xl font-bold text-vert`}>-15%</h1>
						<p>comparing to last week</p>
					</div>
					<div className=" p-3 flex-1 bg-white flex flex-col gap-3 rounded-xl border-2 border-gris">
						<h1 className={` text-2xl font-bold text-vert`}>-15%</h1>
						<p>comparing to last week</p>
					</div>
				</div>
			</div>
			<div className=" w-full flex-1">
				<LineChart width={730} height={250} data={data}
					margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip />
					<Legend />
					<Line type="monotone" dataKey="pv" stroke="#8884d8" />
					<Line type="monotone" dataKey="uv" stroke="#82ca9d" />
				</LineChart>
			</div>
		</div>
	);
}
