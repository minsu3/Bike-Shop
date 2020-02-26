import React from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import SignLanding from "../components/Home/SignLanding";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import ProfileContainer from "../containers/ProfileContainer";
import ContactsContainer from "../containers/ContactsContainer";

export default withRouter(({ setCurrentUser, currentUser, history }) => {
  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        currentUser ? <Component {...props} /> : <Redirect to="/userauth" />
      }
    />
  );

  return (
    <Switch>
      <Route exact path="/userauth" component={SignLanding} />
      <Route
        path="/userauth/login"
        render={() => (
          <Login history={history} setCurrentUser={ setCurrentUser } />
        )}
      />
      <Route path="/userauth/register" component={Register} />
      <PrivateRoute path="/userauth/profile" component={ProfileContainer} />
      <PrivateRoute path="/userauth/contacts" component={ContactsContainer} />
    </Switch>
  );
});
