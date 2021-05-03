import {
  AuthAction,
  withAuthUser,
  withAuthUserTokenSSR,
} from "next-firebase-auth";
import Container from "components/Container";

function Home() {
  return (
    <Container>
      <p>HomePage</p>
    </Container>
  );
}

export const getServerSideProps = withAuthUserTokenSSR()();

export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
  authPageURL: "/login",
})(Home);
