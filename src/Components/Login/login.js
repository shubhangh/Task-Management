import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
// import Box from "@material-ui/core/Box";
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import green from "@material-ui/core/colors/green";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import "./loginStyles.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import axios from "axios";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "green",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  textInput: {
    borderColor: "green !important",
    text: "green",
  },
  floatingLabelFocusStyle: {
    color: "green",
  },
}));

const themeStyles = createMuiTheme({
  palette: {
    primary: green,
  },
  overrides: {
    // Style sheet name ⚛️
    MuiButton: {
      // Name of the rule
      text: {
        // Some CSS
        background: "linear-gradient(45deg, #026745 30%, #009900 90%)",
        borderRadius: 3,
        border: 0,
        color: "white",
        height: 48,
        padding: "0 30px",
        marginTop: "7px",
      },
    },
  },
});

export default function LogIn() {
  let history = useHistory();
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i );
  //password muct be min 6 char long and must contains and upper case letter and a number
  const validPassRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
   const formValidation = () => {
    let isValid = true; 
    if((email && !password) || (!email && password)|| (!email && !password)){
      setErrPassword("Please enter all fields");
    }
    else if(email && password){
    setErrPassword((validEmailRegex.test(email) && validPassRegex.test(password))? '': 'Invalid Email or Password');
      }
    console.log(setErrEmail, "err email");
    console.log(setErrPassword, "err pass");
    return isValid;
  };

  const submit = (e) => {
    e.preventDefault();
    const isValid = formValidation();
    console.log(email, "email value");
    console.log(password, "passwrd value");
    if (isValid) {
      axios
        .post("http://127.0.0.1:3333/taskmanagement/api/auth/login", {
          email,
          password,
        })
        .then((res) => {
          console.log(res, "here is the respone");
          console.log(res.data, "respone.data");
          if (res.data.message === "success") {
            console.log("login sucess");
            alert("login sucess");
            history.push("/projects");
          } else if (res.data.message === "failure") {
            console.log("login fail");
            alert("login fail");
          } else {
            console.log("doesnt exist");
            alert("doesnt exist");
          }
        });
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <ThemeProvider theme={themeStyles}>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          {/* <ValidatorForm>  */}
          <form className={classes.form} noValidate onSubmit={submit}>
            <TextField
              variant="outlined"
              margin="normal"
              // required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={email}
              // autoComplete="email"
              // validators={["required", "isEmail"]}
              // errorMessages={["this field is required", "email is not valid"]}
              // onChange={(e) => handleChange(e)}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              autoFocus
              InputProps={{
                classes: {
                  notchedOutline: classes.textInput,
                },
              }}
              InputLabelProps={{
                className: classes.floatingLabelFocusStyle,
              }}
            />
            <div style={{ fontSize: 10, color: "red" }}>{errEmail}</div>
            <TextField
              type="password"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              // autoComplete="current-password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              autoFocus
              InputProps={{
                classes: {
                  notchedOutline: classes.textInput,
                },
              }}
              InputLabelProps={{
                className: classes.floatingLabelFocusStyle,
              }}
            />
            <div style={{ fontSize: 10, color: "red" }}>{errPassword}</div>
            <Button type="submit" fullWidth onClick={submit}>
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" color="primary">
                  {/* to={"/forgotpassword/${id}"} */}
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
          </form>
          {/* </ValidatorForm> */}
        </div>
      </ThemeProvider>
    </Container>
  );
}
