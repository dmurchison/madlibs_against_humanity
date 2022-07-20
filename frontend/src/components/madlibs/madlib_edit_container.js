import { connect } from 'react-redux';
import { fetchMadlib,updateMadlib } from '../../actions/madlib_actions.js';
import MadlibCompose from './madlib_compose';

const mapSTP = (state,ownProps) => {
  return {
    currentMadlib: state.entities.madlibs[ownProps.match.params.id],
    errors: Object.values(state.errors.madlibs),
    currentUser: state.session.user.id,
    formType: 'Edit'
  };
};

const mapDTP = (dispatch,ownProps) => {
  return {
    action: data => dispatch(updateMadlib(data)),
    fetchMadlib: () => dispatch(fetchMadlib(ownProps.match.params.id))
  };
};

export default connect(mapSTP,mapDTP)(MadlibCompose);