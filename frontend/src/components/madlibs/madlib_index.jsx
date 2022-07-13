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
            <div className='madlib-info'>
              <p>Creator:</p>
              <p>Plays:</p>
            </div>
          </div>
        </div>
      </div>
    )
  }



  // render() {
  //   return (this.props.madlibs !== []) ? (
  //     <div className='madlib_index-container'>
  //       <h2 className='all madlibs'>All Madlibs</h2>
  //       <div className='madlib_index-title-container'>
  //         {
  //           this.props.madlibs.map( (madlib, i) => (
  //             <Link key={`madlib-link-${i}`} to={`madlibs/${madlib._id}`}>
  //               <span className='madlib_index-title' key={`madlib-${i}`}>{madlib.title}</span>
  //             </Link>            
  //           ))
  //         }
  //       </div>
  //     </div>
  //   ) : (
  //     null
  //   );
  // }

};

export default MadlibIndex;