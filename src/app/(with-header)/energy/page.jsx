export default function Home() {
	return (
        <div className="w-full mt-5 md:mt-0 h-full bg-gray-100 rounded-xl p-6 flex flex-col gap-6">
			<h1 className="font-bold text-3xl text-gray-800">Energy Consumption Dashboard</h1>

           
			<div className="w-full flex flex-col md:flex-row gap-4">
                
				<div className="p-5 flex-1 bg-white flex flex-col gap-3 rounded-xl border-2 border-gray-300 shadow-md hover:shadow-lg transition-shadow duration-300">
					<h1 className="text-3xl font-bold text-green-600">-15%</h1>
					<p className="text-gray-600">Compared to last week</p>
				</div>
                
                
				<div className="p-5 flex-1 bg-white flex flex-col gap-3 rounded-xl border-2 border-gray-300 shadow-md hover:shadow-lg transition-shadow duration-300">
					<h1 className="text-3xl font-bold text-green-600">-10%</h1>
					<p className="text-gray-600">Compared to last month</p>
				</div>
                
               
				<div className="p-5 flex-1 bg-white flex flex-col gap-3 rounded-xl border-2 border-gray-300 shadow-md hover:shadow-lg transition-shadow duration-300">
					<h1 className="text-3xl font-bold text-green-600">-20%</h1>
					<p className="text-gray-600">Compared to last year</p>
				</div>
                
               
				<div className="p-5 flex-1 bg-white flex flex-col gap-3 rounded-xl border-2 border-gray-300 shadow-md hover:shadow-lg transition-shadow duration-300">
					<h1 className="text-3xl font-bold text-green-600">-5%</h1>
					<p className="text-gray-600">Weekly trend</p>
				</div>

                
				<div className="p-5 flex-1 bg-white flex flex-col gap-3 rounded-xl border-2 border-gray-300 shadow-md hover:shadow-lg transition-shadow duration-300">
					<h1 className="text-3xl font-bold text-green-600">-25%</h1>
					<p className="text-gray-600">Daily comparison</p>
				</div>
			</div>
		</div>
	);
}
