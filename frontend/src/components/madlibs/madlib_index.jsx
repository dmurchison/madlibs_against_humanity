import React from 'react';
import { Link } from 'react-router-dom';
import '../../stylesheets/madlib_index.scss';

class MadlibIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.getMadlibLinks = this.getMadlibLinks.bind(this)
  }

  componentDidMount() {
    this.props.fetchMadlibs();
  }

  getMadlibLinks() {
    return (
      this.props.madlibs.map( (madlib, i) => (
        <Link key={`madlib-link-${i}`} to={`madlibs/${madlib._id}`}>
          <div className='madlib-title-link' key={`madlib-${i}`}>
            {madlib.title}
            <div className='madlib-info'>
              <p>Creator:</p>
              <p>Plays:</p>
            </div>
          </div>
        </Link>            
      ))
    )
  }


  render() {
    if (!this.props.madlibs) return null;
    return (
      <div className='madlibs-index-container'>
        <h2 className='madlib-index-header'>All Madlibs</h2>
        <div className='madlibs-title-container'>
          <div className='madlibs-index-titles'>
            {this.getMadlibLinks()}
          </div>
        </div>
      </div>
    )
  }
};

export default MadlibIndex;