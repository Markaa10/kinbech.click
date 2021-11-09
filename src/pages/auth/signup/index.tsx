import { useState } from "react";
import { SignupIllustration } from "assets/illustrations";
import styled from "styled-components";
import Flex from "components/flex";
import { Title2, Body1 } from "components/texts";
import OutlinedInput from "components/input/outlined";
import SelectInput from "components/input/select";
import { EyeIcon } from "assets/icons";
import Checkbox from "components/input/checkbox";
import Button from "components/buttons/button";
import { url } from "inspector";

type ISignupPageProps = { setIsSignup: any };

const Form = styled.form`
  height: 100%;
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
    <div
      style={{
        backgroundImage: `url(${SignupIllustration})`,
        padding: "47px 0",
      }}
    >
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

        <Flex alignItems="flex-start">
          <SelectInput label="Country" />
          <OutlinedInput label="Phone" placeholder="01-552860" width="90%" />
        </Flex>

        <OutlinedInput label="Mobile" placeholder="+977 9841468940" />

        <Flex alignItems="flex-start">
          <OutlinedInput
            label="Street"
            placeholder="Harisiddhi-8"
            width="47%"
          />

          <OutlinedInput label="City" placeholder="Lalitpur" width="47%" />
        </Flex>

        <Checkbox
          label="I do not want to subscribe to site newsletter."
          marginTop={64}
        />
        <Checkbox
          label="Hide my phone number in my ads (only contact from email)"
          marginTop={15}
          marginBottom={75}
        />
        <Checkbox
          label="
        I have read and agree to terms of use."
          marginTop={34}
          marginBottom={75}
        />
        <Button text="SIGNUP" marginBottom={21} />
      </Form>
    </div>
  );
};

export default SignupPage;
