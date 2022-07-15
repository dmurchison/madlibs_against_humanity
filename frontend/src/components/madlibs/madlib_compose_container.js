import { connect } from 'react-redux';
import {composeMadlib, removeMadlibErrors} from '../../actions/madlib_actions.js'

import MadlibCompose from './madlib_compose';

const mapSTP = (state) => ({
  currentUser: state.session.user.id,
  errors: state.errors.madlibs,
  formType: 'Create'
});

const mapDTP = dispatch => {
  return {
    action: data => dispatch(composeMadlib(data)),
    removeMadlibErrors: () => dispatch(removeMadlibErrors())
  };
};

export default connect(mapSTP, mapDTP)(MadlibCompose);