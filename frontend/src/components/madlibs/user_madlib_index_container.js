import { connect } from 'react-redux';
import { fetchUserMadlibs } from '../../actions/madlib_actions';

import UserMadlibIndex from './user_madlib_index';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.user,
  madlibs: Object.values(state.entities.madlibs)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchUserMadlibs: () =>  dispatch(fetchUserMadlibs(ownProps.match.params.id))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserMadlibIndex);