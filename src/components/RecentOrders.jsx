import React from 'react'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'
import { getOrderStatus } from '../lib/helpers'

const recentOrderData = [
	{
		
		customer_name: 'Anonymous',
		order_date: '2023-09-20T03:24:00',
		order_total: '9718xxxxxx',
		current_order_status: 'Profile Created',
		shipment_address: 'abc@gmail.com'
	},


]

export default function RecentOrders() {
	return (
		<div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium"></strong>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="w-full text-gray-700">
					<thead>
						<tr>
							<th>Name</th>
							<th>Date</th>
							<th>Mobile No.</th>
							<th>E-mail</th>
							<th>Status</th>
							
						</tr>
					</thead>
					<tbody>
						{recentOrderData.map((order) => (
							<tr key={order.id}>
								
								
								<td>
									<Link to={`/customer/${order.customer_id}`}>{order.customer_name}</Link>
								</td>
								<td>{format(new Date(order.order_date), 'dd MMM yyyy')}</td>
								<td>{order.order_total}</td>
								<td>{order.shipment_address}</td>
								<td>{getOrderStatus(order.current_order_status)}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}
