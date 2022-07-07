import React from 'react';

class MadlibBox extends React.Component {
  render() {
    return (
        <div>
            <h2>{this.props.title}</h2>
            <h3>{this.props.body}</h3>
        </div>
    );
  }
}

export default MadlibBox;
