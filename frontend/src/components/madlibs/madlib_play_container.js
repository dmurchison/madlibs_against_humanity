import { connect } from 'react-redux';
import { fetchMadlib,updateMadlib } from '../../actions/madlib_actions.js';
import MadlibPlay from './madlib_play';

const mapSTP = (state,ownProps) => {
  return {
    currentMadlib: state.entities.madlibs[ownProps.match.params.id],
    currentUser: state.session.user.id,
    loggedIn: state.session.isAuthenticated,
  };
};

const mapDTP = (dispatch, ownProps) => ({
  editMadlib: data => dispatch(updateMadlib(data)),
  fetchMadlib: () => dispatch(fetchMadlib(ownProps.match.params.id))
});

export default connect(mapSTP,mapDTP)(MadlibPlay);