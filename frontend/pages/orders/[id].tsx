import { useEffect, useCallback, useState } from "react";
import { useRouter } from "next/router";
import "firebase/firestore";
import {
	AuthAction,
	getFirebaseClient,
	withAuthUser,
	withAuthUserTokenSSR
} from "next-firebase-auth";

import { Container, Loading, OrderType } from "components";

function OrderDetail() {
	const {
		query: { id }
	} = useRouter();
	const [order, setOrder] = useState<OrderType>();

	const fetchOrder = useCallback(async () => {
		const orderRef = getFirebaseClient()
			.firestore()
			.collection("orders")
			.doc(id);
		const doc = await orderRef.get();
		setOrder(doc.data());
	}, [id]);

	console.log(order);

	useEffect(() => {
		fetchOrder();
	}, [fetchOrder, id]);

	return <Container>{order ? <p>{order.title}</p> : <Loading />}</Container>;
}

export const getServerSideProps = withAuthUserTokenSSR()();

export default withAuthUser({
	whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
	authPageURL: "/login",
	LoaderComponent: Loading
})(OrderDetail);
