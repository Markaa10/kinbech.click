import { useState } from "react";

import SignupPage from "./signup";
import LoginPage from "./login";

const AuthPage = () => {
  const [isSignup, setIsSignup] = useState<boolean>(false);

  return isSignup ? (
    <SignupPage setIsSignup={setIsSignup} />
  ) : (
    <LoginPage setIsSignup={setIsSignup} />
  );
};

export default AuthPage;
