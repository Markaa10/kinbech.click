import React, { useState } from "react";
import {
  Link,
  Typography,
  Grid,
  Box,
  FormControl,
  FormControlLabel,
  Checkbox,
  Button,
  InputLabel,
  Paper,
  InputAdornment,
  IconButton,
  Input,
  OutlinedInput,
  Select,
  MenuItem,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { SignupIllustration } from "assets/illustrations";
import { makeStyles } from "@mui/styles";

type ISignupPageProps = { setIsSignup: any };

const SignupPage = (props: ISignupPageProps) => {
  const { setIsSignup } = props;
  const classes = useStyles();

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [country, setCountry] = useState<string>("");

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleCountryChange = (e: any) => {
    setCountry(e.target.value);
  };
  return (
    <Box
      style={{
        backgroundImage: `url(${SignupIllustration})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        component={Paper}
        elevation={5}
        sx={{
          mx: "25%",
          px: 11,
          py: "29px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h2" component="h2">
          Register Here
        </Typography>
        <Typography variant="body1" component="p" marginTop={"26px"}>
          Signup as Salesman
        </Typography>

        <Box component="form" noValidate width="100%" sx={{ mt: "58px" }}>
          <FormControl
            sx={{ m: 1, width: "100%", mb: "34px" }}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-email">
              Full Name
            </InputLabel>
            <OutlinedInput id="outlined-adornment-fullname" type="text" />
          </FormControl>

          <FormControl
            sx={{ m: 1, width: "100%", mb: "34px" }}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
            <OutlinedInput
              id="outlined-adornment-email"
              type="email"
              label="Email"
            />
          </FormControl>

          <FormControl
            sx={{ m: 1, width: "100%", mb: "34px" }}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>

          <FormControl
            sx={{ m: 1, width: "100%", mb: "34px" }}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Confirm Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Confirm Password"
            />
          </FormControl>

          <Box
            display="inline-flex"
            width="102%"
            alignItems="center"
            justifyContent="space-around"
            marginBottom="34px"
          >
            <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
              <InputLabel id="demo-simple-select-label">Country</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={country}
                label="Age"
                onChange={handleCountryChange}
              >
                <MenuItem value={"nepal"}>Nepal</MenuItem>
                <MenuItem value={"china"}>China</MenuItem>
                <MenuItem value={"india"}>India</MenuItem>
              </Select>
            </FormControl>

            <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-phone">Phone</InputLabel>
              <OutlinedInput
                id="outlined-adornment-phone"
                type="phone"
                label="Phone"
              />
            </FormControl>
          </Box>

          <FormControl
            sx={{ m: 1, width: "100%", mb: "34px" }}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-mobile">Mobile</InputLabel>
            <OutlinedInput
              id="outlined-adornment-mobile"
              type="phone"
              startAdornment={<Typography>+977 </Typography>}
              label="Mobile"
            />
          </FormControl>

          <Box
            display="inline-flex"
            width="102%"
            alignItems="center"
            justifyContent="space-between"
            marginBottom="64px"
          >
            <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-street">
                Street
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-street"
                type="street"
                label="Street"
              />
            </FormControl>

            <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-city">City</InputLabel>
              <OutlinedInput
                id="outlined-adornment-city"
                type="city"
                label="City"
              />
            </FormControl>
          </Box>

          <FormControlLabel
            control={<Checkbox value="subscription" color="primary" />}
            label="I do not want to subscribe to site newsletter."
          />
          <FormControlLabel
            control={<Checkbox value="hidePhone" color="primary" />}
            label="Hide my phone number in my ads (only contact from email)"
          />

          <FormControlLabel
            control={<Checkbox value="hidePhone" color="primary" />}
            label="I have read and agree to terms of use."
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.login}
          >
            SIGNUP
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SignupPage;

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
    marginTop: "75px !important",
  },
});
