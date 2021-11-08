import { useState } from "react";
import { SignupIllustration } from "assets/illustrations";
import styled from "styled-components";
import Flex from "components/flex";
import { Title2, Body1 } from "components/texts";
import OutlinedInput from "components/input/outlined";
import { EyeIcon } from "assets/icons";

type ISignupPageProps = { setIsSignup: any };

const Image = styled.img`
  width: 100%;
  objectfit: cover;
`;

const Form = styled.form`
  position: absolute;
  top: 51px;
  bottom: 47px;

  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.15);
  border-radius: 20px;

  padding: 0 88px;
  margin: 0 25%;
`;

const SignupPage = (props: ISignupPageProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [country, setCountry] = useState<string>("");

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  // const handleCountryChange = (e: any) => {
  //   setCountry(e.target.value);
  // };
  return (
    <>
      <Image src={SignupIllustration} alt="signupIllustration" />
      <Form>
        <Title2 marginTop={29}>Register Here</Title2>
        <Body1 marginTop={26} marginBottom={62}>
          Signup as Salesman
        </Body1>

        <OutlinedInput label="Full Name" placeholder="Sagar Ghimire" />
        <OutlinedInput
          label="Email"
          type="email"
          placeholder="sagar.ghimire001@gmail.com"
        />
        <OutlinedInput
          label="Password"
          placeholder="*********"
          type="password"
          icon={<EyeIcon />}
        />
        <OutlinedInput
          label="Confirm Password"
          placeholder="*********"
          type="password"
          icon={<EyeIcon />}
        />
      </Form>
    </>
  );
};

export default SignupPage;
