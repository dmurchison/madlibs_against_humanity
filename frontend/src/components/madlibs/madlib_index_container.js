import { connect } from 'react-redux';
import { fetchMadlibs } from '../../actions/madlib_actions';
import MadlibIndex from './madlib_index';

const mapStateToProps = state => ({
    madlibs: Object.values(state.entities.madlibs),
    authors: state.entities.users,
});

const mapDispatchToProps = dispatch => ({
  fetchMadlibs: () => dispatch(fetchMadlibs())
});

export default connect(mapStateToProps, mapDispatchToProps)(MadlibIndex);