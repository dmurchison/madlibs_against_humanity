import { connect } from 'react-redux';
import { fetchMadlib,updateMadlib } from '../../actions/madlib_actions.js';
import MadlibCompose from './madlib_compose';

const mapSTP = (state,ownProps) => {
  return {
    currentMadlib: state.madlibs[ownProps.match.params.id],
    formType: 'Edit'
  };
};

const mapDTP = dispatch => {
  return {
    action: data => dispatch(updateMadlib(data)),
    fetchMadlib: data => dispatch(fetchMadlib(data))
  };
};

export default connect(mapSTP, mapDTP)(MadlibCompose);