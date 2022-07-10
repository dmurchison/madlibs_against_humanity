import React from 'react';
import { Link } from 'react-router-dom';
import '../../stylesheets/madlib_index.scss';

class MadlibIndex extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    if (!this.props.madlibs.length){
      this.props.fetchMadlibs();
    }
  }

  render() {

    //if this.props.madlibs is empty
    return (this.props.madlibs !== []) ? (
      <div className='madlib_index-container'>
        <h2>All Madlibs</h2>
        {
          this.props.madlibs.map( (madlib, i) => (
            <Link key={`madlib-link-${i}`} to={`madlibs/${madlib._id}`}>
              <span className='madlib_index-title' key={`madlib-${i}`}>{madlib.title}</span>
            </Link>            
          ))
        }
      </div>
    ) : (
      null
    );
  }

};

export default MadlibIndex;