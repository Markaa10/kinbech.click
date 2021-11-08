import React, { useState } from "react";

import styled from "styled-components";

import { LoginIllustration } from "assets/illustrations";
import { EyeIcon } from "assets/icons";
import Flex from "components/flex";
import StandardInput from "components/input/standard";
import { Title2, Body1, LinkText } from "components/texts";
import Checkbox from "components/input/checkbox";
import TextButton from "components/buttons/text";
import Button from "components/buttons/button";

type ILoginPageProps = { setIsSignup: any };

const Container = styled(Flex)`
  height: 100vh;
`;

const Image = styled.img`
  width: 70%;
  height: 100vh;
`;

const Form = styled.form`
  margin-top: 160px;
  display: flex;
  flex-direction: column;
`;

const LoginPage = (props: ILoginPageProps) => {
  const { setIsSignup } = props;

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Container>
      <Image src={LoginIllustration} />
      <div style={{ width: "30%", padding: "0 35px" }}>
        <Title2>Welcome Back</Title2>
        <Body1 marginTop={26}>Login as Salesman</Body1>

        <Form>
          <StandardInput placeholder="Enter your email address" />
          <StandardInput
            placeholder="Enter your password"
            marginTop={82}
            icon={<EyeIcon />}
          />

          <Flex marginTop={58}>
            <Checkbox label="Remember me" width="50%" />
            <TextButton text="Forgot password?" />
          </Flex>

          <Button text="LOGIN" marginTop={49} marginBottom={48} />

          <LinkText text="Don’t have an account?" link="Register here!" />
        </Form>
      </div>

      {/* <Grid item xs={12} sm={8} md={5} component={Paper} elevation={3} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography variant="h2" component="h2">
            Welcome Back
          </Typography>
          <Typography variant="body1" component="p" marginTop={"26px"}>
            Login as Salesman
          </Typography>
          <Box component="form" noValidate width="100%" sx={{ mt: "156px" }}>
            <FormControl
              sx={{ m: 1, width: "100%", mb: "82px" }}
              variant="standard"
            >
              <InputLabel htmlFor="standard-adornment-email">
                Email Address
              </InputLabel>
              <Input id="standard-adornment-email" type="email" fullWidth />
            </FormControl>

            <FormControl sx={{ m: 1, width: "100%" }} variant="standard">
              <InputLabel htmlFor="standard-adornment-password">
                Password
              </InputLabel>
              <Input
                id="standard-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              marginTop={"56px"}
              marginBottom={"49px"}
            >
              <Grid item>
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
            </Box>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.login}
            >
              LOGIN
            </Button>
            <Box display="inline-flex" sx={{ mt: 6 }}>
              <Typography variant="body1" component="p" color="#787878">
                Don’t have an account?
              </Typography>
              <Link onClick={() => setIsSignup((prev: any) => !prev)}>
                <Typography
                  variant="body1"
                  component="p"
                  color="#000"
                  fontWeight="bold"
                >
                  Register here!
                </Typography>
              </Link>
            </Box>
          </Box>
        </Box>
      </Grid> */}
    </Container>
  );
};

export default LoginPage;
