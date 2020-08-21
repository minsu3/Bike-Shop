import React from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
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
      <Route exact path="/userauth" component={Register} />
      <Route
        path="/userauth/login"
        render={() => (
          <Login history={history} setCurrentUser={ setCurrentUser } />
        )}
      />
      <PrivateRoute path="/userauth/profile" component={ProfileContainer} />
      <PrivateRoute path="/userauth/contacts" component={ContactsContainer} />
    </Switch>
  );
});
