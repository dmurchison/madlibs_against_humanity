import React from 'react';

class MadlibBox extends React.Component {
  render() {
    return (
      <div className='madlib-box-container'>
        <h3 className='your-madlib'>Your Madlib!</h3>

        <div className='madlib-box-title'>
          <div>
            Title:
          </div>
          <p className='p-title'>
            <b>{this.props.title}</b>
          </p>
        </div>

        <div className='madlib-box-body'>
          <div>
            Body:
          </div>
          <p className='p-body'>
            {this.props.body}
          </p>
        </div>

      </div>
    );
  }
}

export default MadlibBox;
