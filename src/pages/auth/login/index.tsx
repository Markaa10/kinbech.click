import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { LoginIllustration } from "assets/illustrations";
import { EyeIcon } from "assets/icons";
import Flex from "components/flex";
import StandardInput from "components/input/standard";
import { Title2, Body1 } from "components/texts";
import Checkbox from "components/input/checkbox";
import TextButton from "components/buttons/text";
import Button from "components/buttons/button";
import { colors } from "theme";

type ILoginPageProps = { setIsSignup: any };

const Container = styled(Flex)`
  max-height: 100vh;
`;

const Image = styled.img`
  display: none;
  object-fit: cover;
  width: 50%;

  @media (min-width: 765px) {
    display: block;
    height: 99vh;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 59px 35px;
  width: 100%;

  @media (min-width: 765px) {
    width: 40%;
  }
`;

const LoginPage = (props: ILoginPageProps) => {
  const { setIsSignup } = props;

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Container>
      <Image src={LoginIllustration} />
      <Form>
        <Title2>Welcome Back</Title2>
        <Body1 marginTop={1.625} marginBottom={10}>
          Login as Salesman
        </Body1>

        <StandardInput placeholder="Enter your email address" />
        <StandardInput
          placeholder="Enter your password"
          marginTop={82}
          icon={<EyeIcon />}
        />

        <Flex marginTop={3.625}>
          <Checkbox label="Remember me" width="50%" />
          <TextButton text="Forgot password?" />
        </Flex>

        <Button
          text="LOGIN"
          OnClick={() => navigate("/dashboard")}
          marginTop={49}
          marginBottom={48}
        />

        <Body1 color="#727272" onClick={() => setIsSignup(true)}>
          Don’t have an account?{" "}
          <span
            style={{
              color: colors.text,
              borderBottom: "1px solid #373737",
              cursor: "pointer",
            }}
          >
            Register here!
          </span>
        </Body1>
      </Form>
    </Container>
  );
};

export default LoginPage;
