import React from "react";
import { Link } from 'react-router-dom';

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
            <>
                <Link to={`/madlibs/${this.props.madlib._id}/edit`}>
                        <button>Edit</button>
                </Link>
                <Link to={`/`}>
                        <button onClick={this.handleDelete}>Delete</button>
                </Link>
            </>
        ) : (
            null
        )
    }

    render(){
        
        return this.props.madlib ? (
            <div>
                {this.props.madlib.title}

                {/* This button will need to have a condition that checks the currentUser to the Owner of the Madlib */}
                
                <Link to={`/madlibs/${this.props.madlib._id}/play`}>
                    <button>Play</button>
                </Link>
                
                {this.madlibAuth()}
            </div>
        ) : (
            null
        )
    }
}

export default MadlibShow;