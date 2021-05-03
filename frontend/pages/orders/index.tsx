import { useEffect, useState } from "react";
import {
	AuthAction,
	getFirebaseClient,
	withAuthUser
} from "next-firebase-auth";
import "firebase/firestore";

import { Container, Loading, OrderList } from "components";

function Orders() {
	const [orders, setOrders] = useState([]);

	useEffect(() => {
		return getFirebaseClient()
			.firestore()
			.collection("orders")
			.onSnapshot(snap => {
				setOrders(snap.docs.map(doc => ({ ...doc.data(), key: doc.id })));
			});
	}, []);

	return (
		<Container>
			{Array.isArray(orders) && orders.length > 0 ? (
				<OrderList orders={orders} />
			) : (
				<Loading />
			)}
		</Container>
	);
}

export default withAuthUser({
	whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
	authPageURL: "/login"
})(Orders);
