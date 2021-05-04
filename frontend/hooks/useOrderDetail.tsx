import { useEffect, useState } from "react";
import "firebase/firestore";
import { getFirebaseClient } from "next-firebase-auth";

import { OrderType } from "components/OrderItem";

function useOrderDetail(id: string | string[] | undefined) {
  const [order, setOrder] = useState<OrderType>();

  useEffect(() => {
    const fetchOrder = async () => {
      const orderRef = getFirebaseClient()
        .firestore()
        .collection("orders")
        .doc(id);
      const doc = await orderRef.get();
      setOrder(doc.data());
    };
    fetchOrder();
  }, [id]);

  return order;
}

export default useOrderDetail;
