import { connect } from 'react-redux';
import {composeMadlib} from '../../actions/madlib_actions.js'
import MadlibCompose from './madlib_compose';

const mapSTP = (state) => {
  return {
    formType: 'Create'
  };
};

const mapDTP = dispatch => {
  return {
    composeMadlib: data => dispatch(composeMadlib(data))
  };
};

export default connect(mapSTP, mapDTP)(MadlibCompose);