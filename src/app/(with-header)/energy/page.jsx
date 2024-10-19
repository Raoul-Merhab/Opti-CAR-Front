export default function Home() {
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
		</div>
	);
}
