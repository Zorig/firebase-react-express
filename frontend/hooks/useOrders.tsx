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
        .where("title", "not-in", ["", " "])
        .limit(100);
      const snap = await ordersRef.get();
      setOrders(
        snap.docs.map((doc: any) => ({
          ...(doc.data() as OrderType),
          id: doc.id,
        }))
      );
    }
    fetch();
  }, []);

  return orders;
}

export default useOrders;
