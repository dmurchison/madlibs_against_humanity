import { connect } from 'react-redux';
import { fetchMadlib } from '../../actions/madlib_actions.js';
import MadlibPlay from './madlib_play';

const mapSTP = (state,ownProps) => {
  return {
    currentMadlib: state.entities.madlibs[ownProps.match.params.id],
    keywords: ['noun','adjective','verb','adverb']
  };
};

const mapDTP = (dispatch, ownProps) => ({
  fetchMadlib: () => dispatch(fetchMadlib(ownProps.match.params.id))
});

export default connect(mapSTP,mapDTP)(MadlibPlay);