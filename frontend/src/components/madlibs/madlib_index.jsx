import React from 'react';

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
            <div key={`madlib-${i}`}>{madlib.title}</div>
          ))
        }
      </div>
    ) : (
      null
    );
  }
  
};

export default MadlibIndex;
