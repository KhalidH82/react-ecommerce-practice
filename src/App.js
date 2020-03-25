import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import ShopPage from "./Pages/ShopPage/ShopPage";
import Header from "./Components/header/header";
import SignIn from "./Pages/SignIn-SignUp/SignIn-SignUp";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignIn} />
      </Switch>
    </div>
  );
}

export default App;
