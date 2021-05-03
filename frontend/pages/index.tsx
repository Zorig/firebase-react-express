import Link from "next/link";
import firebase from "firebase";
import {
	AuthAction,
	useAuthUser,
	withAuthUser,
	withAuthUserTokenSSR
} from "next-firebase-auth";
import { Button, Layout } from "components";

function Home() {
	const AuthUser = useAuthUser();
	console.log("auth", AuthUser);
	return (
		<Layout>
			<>
				<h1>Home Page</h1>
				<Button
					text="Logout"
					type="button"
					onClick={() => {
						console.log("cliock");
						firebase.auth().signOut();
					}}
				/>
				<Link href="/orders">
					<a>Orders</a>
				</Link>
			</>
		</Layout>
	);
}

export const getServerSideProps = withAuthUserTokenSSR()();

export default withAuthUser({
	whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
	authPageURL: "/login"
})(Home);
