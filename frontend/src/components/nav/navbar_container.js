import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

import NavBar from './navbar';

const mapStateToProps = (state) => ({
  loggedIn: state.session.isAuthenticated,
  currentUser: state.session.user,

});

const mapDispatchToProps = dispatch => ({
  logout: currentUser => dispatch(logout(currentUser))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);