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
import { useNavigate } from "react-router-dom";

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
  padding: 1.8rem 88px;
  margin: 0 25%;
`;

const SignupPage = (props: ISignupPageProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [country, setCountry] = useState<string>("");

  const navigate = useNavigate();

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  // const handleCountryChange = (e: any) => {
  //   setCountry(e.target.value);
  // };
  return (
    <div
      style={{
        background: `url(${SignupIllustration}) no-repeat center/cover`,
        padding: "47px 0",
      }}
    >
      <Form>
        <Title2>Register Here</Title2>
        <Body1 marginTop={1.625} marginBottom={3.875}>
          Signup as Salesman
        </Body1>

        <OutlinedInput
          label="Full Name"
          width="100%"
          placeholder="Sagar Ghimire"
        />
        <OutlinedInput
          label="Email"
          width="100%"
          type="email"
          placeholder="sagar.ghimire001@gmail.com"
        />
        <OutlinedInput
          label="Password"
          width="100%"
          placeholder="*********"
          type="password"
          icon={<EyeIcon />}
        />
        <OutlinedInput
          label="Confirm Password"
          width="100%"
          placeholder="*********"
          type="password"
          icon={<EyeIcon />}
        />

        <Flex gap={2.6} width="100%">
          <SelectInput label="Country" />
          <OutlinedInput label="Phone" width="100%" placeholder="01-552860" />
        </Flex>

        <OutlinedInput
          label="Mobile"
          width="100%"
          placeholder="+977 9841468940"
        />

        <Flex gap={2.6} width="100%">
          <OutlinedInput
            width="100%"
            label="Street"
            placeholder="Harisiddhi-8"
          />
          <OutlinedInput width="100%" label="City" placeholder="Lalitpur" />
        </Flex>

        <Checkbox
          label="I do not want to subscribe to site newsletter."
          marginTop={4}
        />
        <Checkbox
          label="Hide my phone number in my ads (only contact from email)"
          marginTop={0.9}
          marginBottom={4.6}
        />
        <Checkbox
          label="
        I have read and agree to terms of use."
          marginTop={2.125}
          marginBottom={4.6}
        />
        <Button
          text="SIGNUP"
          marginBottom={1.31}
          OnClick={() => navigate("/dashboard")}
        />
      </Form>
    </div>
  );
};

export default SignupPage;
