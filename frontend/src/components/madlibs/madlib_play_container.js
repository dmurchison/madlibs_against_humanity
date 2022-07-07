import { connect } from 'react-redux';
// import { composeMadlib } from '../../actions/madlib_actions.js';
import MadlibPlay from './madlib_play';

const mapSTP = (state,ownProps) => {
  return {
    currentMadlib: state.madlibs[ownProps.match.params.id]
  };
};

export default connect(mapSTP)(MadlibPlay);