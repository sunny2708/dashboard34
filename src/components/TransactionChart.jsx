import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
	{
		name: 'Week 1',
		Guest: 4000,
		User: 2400
	},
	{
		name: 'Week 2',
		Guest: 3000,
		User: 1398
	},
	{
		name: 'Week 3',
		Guest: 2000,
		User: 9800
	},
	{
		name: 'Week 4',
		Guest: 2780,
		User: 3908
	},
	
]

export default function TransactionChart() {
	return (
		<div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
			<strong className="text-gray-700 font-medium">Activities</strong>
			<div className="mt-3 w-full flex-1 text-xs">
				<ResponsiveContainer width="100%" height="100%">
					<BarChart
						width={500}
						height={300}
						data={data}
						margin={{
							top: 20,
							right: 10,
							left: -10,
							bottom: 0
						}}
					>
						<CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar dataKey="Guest" fill="#0ea5e9" />
						<Bar dataKey="User" fill="#ea580c" />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	)
}
