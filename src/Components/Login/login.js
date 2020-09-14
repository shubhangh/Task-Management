import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import green from "@material-ui/core/colors/green";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import "./loginStyles.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";



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
    text : 'green'
  },
  floatingLabelFocusStyle: {
    color: "green"
}
}));

const themeStyles = createMuiTheme({
    palette:{
        primary:green
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
        marginTop:"7px",
      },
    },
  
  },
});

export default function SignIn() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

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
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
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
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              InputProps={{
                classes: {
                  notchedOutline: classes.textInput,
                },
              }}
              InputLabelProps={{
                className: classes.floatingLabelFocusStyle,
            }}
            />
          

            <Button type="submit" fullWidth>
              Sign In
            </Button>
            <Grid container>
            <Grid item xs>
              <Link href="#" to={"/forgotpassword/${id}"} color="primary" onClick={preventDefault}>
                Forgot password?
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>

     
      </ThemeProvider>
    </Container>
  );
}
