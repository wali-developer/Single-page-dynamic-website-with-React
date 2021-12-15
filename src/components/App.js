import React from "react";
import Home from "./Home";
import { Route, Switch } from "react-router-dom";
import Contact from "../Pages/Contact";
import Services from "../Pages/Services";
import About from "../Pages/About";
import Signup from "../Pages/Signup";
import Error404 from "../Pages/Error404";
import SignIn from "../Pages/SignIn";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/home" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/services" component={Services}></Route>
        <Route path="/login" component={SignIn}></Route>
        <Route path="/signup" component={Signup}></Route>
        <Route component={Error404}></Route>
      </Switch>
    </>
  );
};

export default App;
