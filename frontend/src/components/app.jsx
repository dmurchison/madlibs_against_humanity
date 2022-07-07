import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';

import HomePage from './home_page/home_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import ComposeContainer from './madlibs/madlib_compose_container'//////
import EditContainer from './madlibs/madlib_edit_container'//////
import PlayContainer from './madlibs/madlib_play_container'//////

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
        <ProtectedRoute exact path="/madlibs/new" component={ComposeContainer} />
        <ProtectedRoute exact path="/madlibs/edit" component={EditContainer} />
        <Route exact path="/madlibs/play" component={PlayContainer} />
        <Route exact path="/" component={HomePage} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </Switch>
  </div>
);

export default App;