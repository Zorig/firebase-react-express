import { useEffect, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import {
  AuthAction,
  withAuthUser,
  withAuthUserTokenSSR,
} from "next-firebase-auth";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

import { Layout, Loading } from "components";

const firebaseAuthConfig = {
  signInFlow: "popup",
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: false,
    },
  ],
  signInSuccessUrl: "/",
  credentialHelper: "none",
  callbacks: {
    signInSuccessWithAuthResult: () => false,
  },
};

function Login() {
  const [renderAuth, setRenderAuth] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setRenderAuth(true);
    }
  }, []);

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-xl font-bold text-gray-900">
              Sign in to your account
            </h2>
          </div>
          {renderAuth ? (
            <StyledFirebaseAuth
              uiConfig={firebaseAuthConfig}
              firebaseAuth={firebase.auth()}
            />
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps = withAuthUserTokenSSR({
  whenAuthed: AuthAction.REDIRECT_TO_APP,
})();

export default withAuthUser({
  whenAuthed: AuthAction.REDIRECT_TO_APP,
})(Login);
