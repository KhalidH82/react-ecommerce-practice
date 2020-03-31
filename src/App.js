import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import ShopPage from "./Pages/ShopPage/ShopPage";
import Header from "./Components/header/header";
import SignIn from "./Pages/SignIn-SignUp/SignIn-SignUp";
import "./App.css";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";

function App(props) {
  useEffect(() => {
    let unsubscribefromAuth = null;
    unsubscribefromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          props.setCurrentUser({ id: snapShot.id, ...snapShot.data() });
        });
      }
      setCurrentUser(userAuth);
    });
    return () => {
      unsubscribefromAuth();
    };
  }, [props]);

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

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
