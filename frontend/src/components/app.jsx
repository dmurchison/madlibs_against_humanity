import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
import '../stylesheets/reset.scss';
import '../stylesheets/application.scss';
import Footer from './nav/footer';

// Component Containers
import NavBarContainer from './nav/navbar_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import MadlibIndexContainer from './madlibs/madlib_index_container';
import MadlibShowContainer from './madlibs/madlib_show_container';
import ComposeContainer from './madlibs/madlib_compose_container'//////
import EditContainer from './madlibs/madlib_edit_container'//////
import PlayContainer from './madlibs/madlib_play_container'//////

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
        <ProtectedRoute exact path="/madlibs/new" component={ComposeContainer} />
        <Route exact path="/madlibs/:id" component={MadlibShowContainer} />
        <ProtectedRoute exact path="/madlibs/:id/edit" component={EditContainer} />
        <Route exact path="/madlibs/:id/play" component={PlayContainer} />
        <Route exact path="/" component={MadlibIndexContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </Switch>
    <Footer />
  </div>
);

export default App;