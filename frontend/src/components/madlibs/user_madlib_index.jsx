import React from "react";
import { Link } from 'react-router-dom';

class UsersMadlibIndex extends React.Component {
  constructor(props){
    super(props)
    this.state = [];
  }  

  componentDidMount(){
    this.setState();
    this.props.fetchUserMadlibs();
  }


  render() {
    return (
      <div className="user-madlib-index">
          {
            this.props.madlibs.map( (madlib, i) => {

              return (
                <Link to={`/madlibs/${madlib._id}`}>
                    {madlib.title}
                </Link>
              )
            })
          }
      </div>
    )
  }
}

export default UsersMadlibIndex;