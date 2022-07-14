import React from "react";
import { Link } from 'react-router-dom';

class UsersMadlibIndex extends React.Component {
  constructor(props){
    super(props)
    this.state = {};

    this.getMadlibTitles = this.getMadlibTitles.bind(this);
  }  

  componentDidMount(){
    this.setState();
    this.props.fetchUserMadlibs();
  }

  getMadlibTitles() {
    return (
      this.props.madlibs.map( (madlib, i) => (
          <Link key={`madlib-title-${i}`} to={`/madlibs/${madlib._id}`}>
            <div className="madlib-title-link">
              {madlib.title}
            </div>
          </Link>
        )
      )
    )
  }


  render() {
    return (
      <div className="madlibs-index-container">
        <h2 className="madlib-index-header">{this.props.currentUser.handle}'s Madlibs!</h2>
          <div className="madlibs-title-container">
            {this.getMadlibTitles()}
          </div>
      </div>
    )
  }
}

export default UsersMadlibIndex;