import React from "react";
import { Link } from 'react-router-dom';
import '../../stylesheets/madlib.scss';

class UsersMadlibIndex extends React.Component {
  constructor(props){
    super(props)

    this.getMadlibTitles = this.getMadlibTitles.bind(this);
  }  

  componentDidMount(){
    this.props.fetchUserMadlibs();
  }

  getMadlibTitles() {
    return this.props.madlibs[0] ? (
      this.props.madlibs.map( (madlib, i) => {
        return (
          <Link to={`/madlibs/${madlib._id}`}>
            <div className="madlib-title-link">
              {madlib.title}
              <div className='user-madlib-index-rating'>
                <p>Rating: {madlib.rating}</p>
              </div>
            </div>
          </Link>
        )
      })
    ) : (
      <div>No madlibs yet!</div>
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