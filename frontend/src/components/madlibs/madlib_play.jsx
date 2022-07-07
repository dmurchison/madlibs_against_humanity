import React from 'react';
import MadlibBox from './madlib_box';

class MadlibPlay extends React.Component {
  constructor(props) {
      super(props);

      this.state = //this.props.currentMadlib
      {
          fillIns: [],
          text: ""
      }

      this.handleSubmit = this.handleSubmit.bind(this);
  } 


  handleSubmit(e) {
    e.preventDefault();
    let fillIns = this.state.fillIns;
    let finished = this.props.currentMadlib.body;
    while(fillIns.length){finished = finished.replace(/noun|adjective|verb|adverb/, fillIns.shift())}
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
    let { currentMadlib } = this.props;
    let blanks = currentMadlib.blanks;
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
                {
                  blanks.map( (blank, i) => (
                    <div>
                      <br/>
                      <input type="text" onChange={this.update(i)} placeholder={blank}/>
                      <br/>
                    </div>
                  ))
                }
                <button type="submit">Finish</button>
            </form>
            <MadlibBox title={this.state.title} body={this.state.text} />
        </div>
    )
  }
}

export default MadlibPlay;
