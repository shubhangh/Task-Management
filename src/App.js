import React from "react";
import "./App.css";
import Header from "./Components/Header/header";
import LogIn from "./Components/Login/login";
import Projects from "./Components/Projects/projects";
// import NavMenu from "./Components/NavMenu/navMenu";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        {/* <Switch> */}
        <Route path="/login" component={LogIn} />
        <Route path="/projects" component={Projects} />
        {/* </Switch> */}
      </Router>
    </div>
  );
}

export default App;
