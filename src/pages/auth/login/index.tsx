import React, { useState } from "react";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  Box,
  Typography,
  Paper,
  InputAdornment,
  IconButton,
  FormControl,
  Input,
  InputLabel,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { makeStyles } from "@mui/styles";

import { LoginIllustration } from "assets/illustrations";

type ILoginPageProps = { setIsSignup: any };

const LoginPage = (props: ILoginPageProps) => {
  const { setIsSignup } = props;

  const classes = useStyles();

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: `url(${LoginIllustration})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={3} square>
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
      </Grid>
    </Grid>
  );
};

export default LoginPage;

const useStyles = makeStyles({
  login: {
    height: 56,
    background: "linear-gradient(180deg, #4CACFC -12.5%, #3946F5 100%)",
    fontFamily: "Roboto Condensed",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "30px !important",
    lineHeight: "35px !important",
    textAlign: "right",
    letterSpacing: "0.1em !important",
  },
});
