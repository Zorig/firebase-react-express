import Link from "next/link";

type Address = {
	city: string;
	country: string;
	street: string;
	zip: string;
};

type Customer = {
	email: string;
	name: string;
	phone: string;
};

export type OrderType = {
	id: string;
	title: string;
	bookingDate: number;
	address: Address;
	customer: Customer;
};

export function Order({ title, id }: OrderType) {
	return (
		<Link href={`/orders/${id}`}>
			<a className="text-indigo-500 block">{title}</a>
		</Link>
	);
}

export default Order;
