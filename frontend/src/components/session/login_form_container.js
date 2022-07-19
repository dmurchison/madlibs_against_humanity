import { connect } from 'react-redux';
import { login, removeSessionErrors } from '../../actions/session_actions';
import LoginForm from './login_form';

const mapStateToProps = state => ({
    currentUser: state.session.user,
    errors: Object.values(state.errors.session)
});

const mapDispatchToProps = dispatch => ({
    login: user => dispatch(login(user)),
    removeSessionErrors: () => dispatch(removeSessionErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);