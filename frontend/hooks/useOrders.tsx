import { useEffect, useState } from "react";
import { getFirebaseClient } from "next-firebase-auth";
import "firebase/firestore";

import { OrderType } from "components/OrderItem";

export function useOrders() {
  const [orders, setOrders] = useState<OrderType[]>([]);

  useEffect(() => {
    async function fetch() {
      const ordersRef = getFirebaseClient()
        .firestore()
        .collection("orders")
        .limit(10);
      const snap = await ordersRef.get();
      setOrders(snap.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    fetch();
  }, []);

  return orders;
}

export default useOrders;
