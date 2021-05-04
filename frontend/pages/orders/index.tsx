import { AuthAction, withAuthUser } from "next-firebase-auth";

import { Container } from "components";
import Orders from "modules/Orders";

function OrdersList() {
  return (
    <Container>
      <Orders />
    </Container>
  );
}

export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
  authPageURL: "/login",
})(OrdersList);
