import {
  AuthAction,
  useAuthUser,
  withAuthUser,
  withAuthUserTokenSSR,
} from "next-firebase-auth";
import Container from "components/Container";

function Home() {
  const user = useAuthUser();
  return (
    <Container>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0"></div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              User information
            </div>
            <a
              href={`mailto:${user.email}`}
              className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              {user.email}
            </a>
            <p className="mt-2 text-gray-500">{user.id}</p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export const getServerSideProps = withAuthUserTokenSSR()();

export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
  authPageURL: "/login",
})(Home);
