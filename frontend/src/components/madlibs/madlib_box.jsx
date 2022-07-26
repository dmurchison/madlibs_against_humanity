import React from 'react';
import '../../stylesheets/madlib.scss';

class MadlibBox extends React.Component {
  render() {
    return (
      <div className='madlib-box-container'>
        <h3 className='madlib-box-header'>Check it out!</h3>

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

        <div className='madlib-box-instructions'>
          <h5 className='instructions'>Instructions (create):</h5>
          <ol>
            <li>Enter title in the given text area.</li>
            <li>Use [example] brackets to write whichever type of word you like.</li>
            <li>You can make the madlib as long and add as many [blanks] as you want!</li>
            <li>Have Fun!</li>
          </ol>
        </div>

      </div>
    );
  }
}

export default MadlibBox;
