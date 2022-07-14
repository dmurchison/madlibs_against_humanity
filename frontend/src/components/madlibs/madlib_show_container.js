import { connect } from 'react-redux'; 
import { fetchMadlib,deleteMadlib } from '../../actions/madlib_actions';
import MadlibShow from './madlib_show';


const mapStateToProps = (state, ownProps) => ({
  madlib: state.entities.madlibs[ownProps.match.params.id],
  currentUser: state.session.user
}); 

const mapDispatchtoProps = (dispatch, ownProps) => ({
  fetchMadlib: () => dispatch(fetchMadlib(ownProps.match.params.id)),
  deleteMadlib: () => dispatch(deleteMadlib(ownProps.match.params.id))
});

export default connect(mapStateToProps, mapDispatchtoProps)(MadlibShow);