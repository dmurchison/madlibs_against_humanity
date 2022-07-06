import { connect } from 'react-redux';
import { composeMadlib } from '../../actions/madlib_actions';
import MadlibCompose from './madlib_compose';

// const mapSTP = (state) => {
//   return {
//     newMadlib: state.madlibs.new,
//     formType: 'Edit'
//   };
// };

// const mapDTP = dispatch => {
//   return {
//     composeMadlib: data => dispatch(composeMadlib(data))
//   };
// };

export default connect(mapSTP, mapDTP)(MadlibCompose);