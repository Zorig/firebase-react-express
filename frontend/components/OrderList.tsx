import Order, { OrderType } from "./Order";

type OrderListType = {
	orders: OrderType[];
};

export function OrderList({ orders }: OrderListType) {
	return (
		<div>
			{orders.map((order: OrderType) => (
				<Order {...order} />
			))}
		</div>
	);
}

export default OrderList;
