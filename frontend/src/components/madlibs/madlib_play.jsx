import React from 'react';
import MadlibBox from './madlib_box';
import { Link } from 'react-router-dom';

class MadlibPlay extends React.Component {
  constructor(props) {
    super(props);

    this.state =
    {
      fillIns: [],
      text: "",
      bIndex: 0
    }
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFillin = this.handleFillin.bind(this);
    this.handleReplay = this.handleReplay.bind(this);
  } 
    
  componentDidMount(){
    this.props.fetchMadlib();
  }
  
  handleSubmit(e) {
    e.preventDefault();
    let fillIns = this.state.fillIns.slice();
    let finished = this.props.currentMadlib.body;
    while(fillIns.length){finished = finished.replace(/noun|adjective|verb|adverb/i, '{'+(fillIns.shift()||'')+'}')}
    this.setState({text: finished})
  }
  
  handleFillin(e) {
    e.preventDefault();
    this.setState({bIndex: this.state.bIndex + 1})
  }

  handleReplay(e) {
    e.preventDefault();
    this.setState({text:"",fillIns:[],bIndex: 0})
  }

  update(i=this.state.bIndex) {
    return e => {
      let newState = this.state.fillIns;
      newState[i] = e.currentTarget.value
      this.setState({
      fillIns: newState
    })}
  }

  render() {
    if (!this.props.currentMadlib) return null; // This is called null catching, it allows the componentDidMount function to recapture the original state of the app.
    return this.state.bIndex === this.props.currentMadlib.blanks.length ? (
      <div>
        <form onSubmit={this.handleSubmit}>
          {
            this.props.currentMadlib.blanks.map( (blank, i) => (
              <div>
                <input type="text" onChange={this.update(i)} placeholder={blank} value={this.state.fillIns[i]}/>
              </div>
            ))
          }
          <button type="submit">Finish</button>
          <button onClick={this.handleReplay} >replay</button>
          <Link to={`/madlibs/${this.props.currentMadlib._id}`}>
            <button>Quit</button>
          </Link>
        </form>
        <MadlibBox title={this.props.currentMadlib.title} body={this.state.text} />
      </div>
    ) : (
      <div>
        <form onSubmit={this.handleFillin}>
          <div>
            <input type="text" onChange={this.update()} 
            value={this.state.fillIns[this.state.bIndex]||''} 
            placeholder={this.props.keywords.find(word => this.props.currentMadlib.blanks[this.state.bIndex].includes(word))}
            />
          </div>
          <button type="submit">fill in</button>
          <Link to={`/madlibs/${this.props.currentMadlib._id}`}>
            <button>quit</button>
          </Link>
        </form>
        <MadlibBox title={this.props.currentMadlib.title} body={this.state.text} />
      </div>
    )
  }
}

export default MadlibPlay;