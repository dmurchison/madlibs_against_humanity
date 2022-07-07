import React from 'react';
import { Link } from 'react-router-dom';

class MadlibIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchMadlibs();
  }

  render() {

    //if this.props.madlibs is empty
    return (this.props.madlibs !== []) ? (
      <div>
        <h2>All Madlibs</h2>
        {
          this.props.madlibs.map( (madlib, i) => (
            <Link key={`madlib-link-${i}`} to={`madlibs/${madlib._id}`}>
              <div key={`madlib-${i}`}>{madlib.title}</div>
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