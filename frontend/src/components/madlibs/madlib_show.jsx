import React from "react";
import { Link } from 'react-router-dom';
import '../../stylesheets/madlib.scss';

class MadlibShow extends React.Component{
    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this)
    }

    componentDidMount(){
        this.props.fetchMadlib();
    }

    handleDelete() {
        this.props.deleteMadlib()
          .then(this.props.history.push('/'))
    }

    madlibAuth(){
      return (this.props.madlib.user === this.props.currentUser.id) ? (
        <div className="madlib-auth-buttons">

          <Link to={`/madlibs/${this.props.madlib._id}/edit`}>
            <button className="edit-button">Edit</button>
          </Link>

          <Link to={`/`}>
            <button className="delete-button" onClick={this.handleDelete}>Delete</button>
          </Link>

        </div>
      ) : ( null )
    }

    render(){
      return this.props.madlib ? (
        <div className="madlib-show-container">
          <p className="madlib-show-title">
            {this.props.madlib.title}
          </p>
          <Link to={`/madlibs/${this.props.madlib._id}/play`}>
            <button className="play-button">Play</button>
          </Link>
          {this.madlibAuth()}
        </div>
      ) : ( null )
    }
}

export default MadlibShow;