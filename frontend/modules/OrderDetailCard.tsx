import Link from "next/link";
import { Button, OrderType } from "components";

type OrderDetailCardType = OrderType & {
  toggleModal: () => void;
};

export function OrderDetailCard({
  bookingDate,
  title,
  address,
  customer,
  toggleModal,
}: OrderDetailCardType) {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 flex items-center sm:px-6">
        <Link href="/orders">
          <a className="text-sm text-indigo-400">
            <i className="animate-ping text-purple-400 opacity-75 mx-2">
              &larr;
            </i>
            Go back
          </a>
        </Link>
        <span className="text-lg leading-6 ml-6 font-medium text-gray-900">
          Order Information
        </span>
        <div className="ml-auto">
          <Button text="Update order" onClick={toggleModal} color="green" />
        </div>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Title</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {title || "N/A"}
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Booking Date</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {new Date(bookingDate).toLocaleString("en-us")}
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Address</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {address && Object.keys(address).length > 0
                ? Object.values(address).map((i) => <span key={i}>{i} </span>)
                : "N/A"}
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Customer</dt>
            <dd className="mt-1 text-sm flex-col text-gray-900 sm:mt-0 sm:col-span-2">
              {customer && Object.keys(customer).length > 0 ? (
                <>
                  <span>{customer?.name}</span>
                  <a
                    href={`mailto:${customer?.email}`}
                    className="block text-indigo-500"
                  >
                    {customer?.email}
                  </a>
                  <a href={`tel:${customer?.phone}`}>
                    <i className="font-small text-gray-400">
                      {customer?.phone}
                    </i>
                  </a>
                </>
              ) : (
                "N/A"
              )}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

export default OrderDetailCard;
