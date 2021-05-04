import OrderItem, { OrderType } from "./OrderItem";

type OrderListType = {
  orders: OrderType[];
};

export function OrderList({ orders }: OrderListType) {
  return (
    <>
      {orders.map((order: OrderType) => (
        <OrderItem key={order.id} {...order} />
      ))}
    </>
  );
}

export default OrderList;
