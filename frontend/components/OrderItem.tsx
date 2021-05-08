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

export function OrderItem({
  title,
  id,
  bookingDate,
  address,
  customer,
}: OrderType) {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {title}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {new Date(bookingDate).toLocaleString("de")}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">
          {address?.zip} {address?.street}
        </div>
        <div className="text-sm text-gray-500">
          {address?.city} {address?.country}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex flex-col">
          <div className="text-sm font-medium text-gray-900">
            {customer?.name}
          </div>
          <div className="text-sm text-gray-500">{customer?.email}</div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <Link href={`/orders/${id}`}>
          <a className="text-indigo-600 hover:text-indigo-900">Edit</a>
        </Link>
      </td>
    </tr>
  );
}

export default OrderItem;
