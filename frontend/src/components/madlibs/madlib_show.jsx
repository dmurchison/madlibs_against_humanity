import React from "react";
import { Link } from 'react-router-dom';

class MadlibShow extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchMadlib();
    }

    render(){
        
        return this.props.madlib ? (
            <div>
                {this.props.madlib.title}

                {/* This button will need to have a condition that checks the currentUser to the Owner of the Madlib */}
                <Link to={`/madlibs/${this.props.madlib._id}/edit`}>
                    <button>Edit</button>
                </Link>
            </div>
        ) : (
            null
        )
    }
}

export default MadlibShow;