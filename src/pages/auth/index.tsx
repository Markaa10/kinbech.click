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
