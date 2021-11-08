import { useState } from "react";
import { SignupIllustration } from "assets/illustrations";

type ISignupPageProps = { setIsSignup: any };

const SignupPage = (props: ISignupPageProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [country, setCountry] = useState<string>("");

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleCountryChange = (e: any) => {
    setCountry(e.target.value);
  };
  return <h1>signup</h1>;
};

export default SignupPage;
