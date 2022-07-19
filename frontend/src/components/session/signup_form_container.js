import { connect } from 'react-redux';
import { signup, login, removeSessionErrors } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mapStateToProps = state => ({
    errors: Object.values(state.errors.session)
});

const mapDispatchToProps = dispatch => ({
    signup: user => dispatch(signup(user)),
    login: user => dispatch(login(user)),
    removeSessionErrors: () => dispatch(removeSessionErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);