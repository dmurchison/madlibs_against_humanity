import React from 'react';
import MadlibBox from './madlib_box';
import { Link } from 'react-router-dom';
import '../../stylesheets/madlib.scss';

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
    const nextBlank = /\[[^\]]*\]/;
    while(fillIns.length){finished = finished.replace(nextBlank, '{'+fillIns.shift()+'}')}
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
    if (!this.props.currentMadlib) return null;
    return this.state.bIndex === this.props.currentMadlib.blanks.length ? (
      <div className='madlib-play-container'>
        <form className='madlib-play-form' onSubmit={this.handleSubmit}>
          {
            this.props.currentMadlib.blanks.map( (blank, i) => (
              <input
                className='madlib-play-input' 
                type="text" 
                onChange={this.update(i)} 
                placeholder={blank} 
                value={this.state.fillIns[i]}
              />
            ))
          }
          <button className='madlib-play-finish-btn' type="submit">Finish</button>
          <button className='madlib-play-replay-btn' onClick={this.handleReplay}>Replay</button>
          <Link to={`/madlibs/${this.props.currentMadlib._id}`}>
            <button className='madlib-play-quit-btn'>Quit</button>
          </Link>
        </form>
        <MadlibBox title={this.props.currentMadlib.title} body={this.state.text} />
      </div>

    ) : (

      <div className='madlib-play-container'>
        <form className='madlib-play-form' onSubmit={this.handleFillin}>
          <input
            className='madlib-play-input' 
            type="text" 
            onChange={this.update()} 
            value={this.state.fillIns[this.state.bIndex]||''} 
            placeholder={this.props.currentMadlib.blanks[this.state.bIndex]}
          />
          <button className='madlib-play-fillin-btn' type="submit">Fill In</button>
          <Link to={`/madlibs/${this.props.currentMadlib._id}`}>
            <button className='madlib-play-quit-btn'>Quit</button>
          </Link>
        </form>
        <MadlibBox title={this.props.currentMadlib.title} body={this.state.text} />
      </div>
    )
  }
}

export default MadlibPlay;