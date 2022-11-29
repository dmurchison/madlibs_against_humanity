import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
import '../stylesheets/reset.css';
import '../stylesheets/application.scss';
import Footer from './nav/footer';

// Component Containers
import NavBarContainer from './nav/navbar_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import UserMadlibIndex from './madlibs/user_madlib_index_container';
import MadlibIndexContainer from './madlibs/madlib_index_container';
import MadlibShowContainer from './madlibs/madlib_show_container';
import ComposeContainer from './madlibs/madlib_compose_container';
import EditContainer from './madlibs/madlib_edit_container';
import PlayContainer from './madlibs/madlib_play_container';

const App = () => (
  <div className='main'>
    <NavBarContainer />
    <Switch>
        <Route exact path="/" component={MadlibIndexContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <ProtectedRoute exact path="/users/:id/madlibs" component={UserMadlibIndex} />
        <ProtectedRoute exact path="/madlibs/new" component={ComposeContainer} />
        <ProtectedRoute exact path="/madlibs/:id/edit" component={EditContainer} />
        <Route exact path="/madlibs/:id" component={MadlibShowContainer} />
        <Route exact path="/madlibs/:id/play" component={PlayContainer} />
    </Switch>
    <Footer />
  </div>
);

export default App;