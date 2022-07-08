import React from 'react';
import MadlibBox from './madlib_box';

class MadlibPlay extends React.Component {
  constructor(props) {
      super(props);

      this.state = //this.props.currentMadlib
      {
          fillIns: [],
          text: "",
      }

      this.handleSubmit = this.handleSubmit.bind(this);
  } 
    
  componentDidMount(){
    this.props.fetchMadlib();
  }
  
  handleSubmit(e) {
    e.preventDefault();
    let fillIns = this.state.fillIns.slice();
    let finished = this.props.currentMadlib.body;
    while(fillIns.length){finished = finished.replace(/noun|nouns|adjective|verb|adverb/i, '{'+(fillIns.shift()||'')+'}')}
    this.setState({text: finished})
  }

  update(idx) {
    return e => {
      let newState = this.state.fillIns;
      newState[idx] = e.currentTarget.value
      this.setState({
      fillIns: newState
    })}
  }

  render() {
    return this.props.currentMadlib ? (
        <div>
            <form onSubmit={this.handleSubmit}>
                {
                  this.props.currentMadlib.blanks.map( (blank, i) => (
                    <div>
                      <input type="text" onChange={this.update(i)} placeholder={blank}/>
                    </div>
                  ))
                }
                <button type="submit">Finish</button>
            </form>
            <MadlibBox title={this.props.currentMadlib.title} body={this.state.text} />
        </div>
    ) : null
  }
}

export default MadlibPlay;
