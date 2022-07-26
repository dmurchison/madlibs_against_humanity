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
      bIndex: 0,
      inputRating: 0,
      newAverage: 0,
      finished: false,
      rated: false,
    }
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFillin = this.handleFillin.bind(this);
    this.handleReplay = this.handleReplay.bind(this);
    this.updateRating = this.updateRating.bind(this);
    this.submitRating = this.submitRating.bind(this);
  } 
  
  componentDidMount(){
    this.props.fetchMadlib()
    .then(() => this.setState({
      rated: this.props.currentMadlib.reviewers.includes(this.props.currentUser),
      newAverage: this.props.currentMadlib.rating
    }))
  }
  
  handleSubmit(e) {
    e.preventDefault();
    let fillIns = this.state.fillIns.slice();
    let finished = this.props.currentMadlib.body;
    const nextBlank = /\[[^\]]*\]/; // regular expression denoting first found [substring in brackets] (including brackets)
    while(fillIns.length){finished = finished.replace(nextBlank, '{'+fillIns.shift()+'}')}
    this.setState({text: finished,finished: true})
  }
  
  handleFillin(e) {
    e.preventDefault();
    this.setState({bIndex: this.state.bIndex + 1})
  }

  handleReplay(e) {
    e.preventDefault();
    this.setState({text:"",fillIns:[],bIndex: 0})
  }

  updateRating(e) {
    e.stopPropagation();
    this.setState({inputRating: ~~e.target.value})
  }

  submitRating(e) {
    e.preventDefault();
    if (!this.state.inputRating) {return}
    let updatedReviews = this.props.currentMadlib.reviews;
    let reviewsAmount = updatedReviews.push(this.state.inputRating);
    let updatedReviewers = this.props.currentMadlib.reviewers;
    updatedReviewers.push(this.props.currentUser);
    let _newAverage = updatedReviews.reduce((a, b) => a + b) / reviewsAmount;
    let madlib = {
      id: this.props.currentUser, // author / userId
      _id: this.props.currentMadlib._id,  //madlibId
      title: this.props.currentMadlib.title,
      body: this.props.currentMadlib.body,
      reviews: updatedReviews,
      reviewers: updatedReviewers,
      rating: _newAverage.toFixed(2),
    };
    this.props.editMadlib(madlib)
    this.setState({rated:true,newAverage:_newAverage.toFixed(2)})
  }

  update(i=this.state.bIndex) {
    return e => {
      let newState = this.state.fillIns;
      newState[i] = e.currentTarget.value
      this.setState({
      fillIns: newState
    })}
  }

  renderRating(){
    return (this.state.finished && this.props.loggedIn && this.props.currentMadlib.user !== this.props.currentUser) ? (

      this.state.rated ? <h6 className='rating'>Rated! Average Rating: {this.state.newAverage}</h6> : (
        <div className='rating-dropdown'>
          <label>Rating:
            <select onChange={this.updateRating} >
              <option hidden disabled selected value></option>
              <option value={1} >1</option>
              <option value={2} >2</option>
              <option value={3} >3</option>
              <option value={4} >4</option>
              <option value={5} >5</option>
            </select>
          </label>
          <button className='rating-submit' onClick={this.submitRating}>submit</button>
        </div>
      )

    ) : ( null )
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
          {this.renderRating()}
        <MadlibBox title={this.props.currentMadlib.title} body={this.state.text} />
      </div>

    ) : (

      <div className='madlib-play-container'>
        <form className='madlib-play-form' onSubmit={this.handleFillin}>
          <h3 className='madlib-box-header'>Fill in the Blanks!</h3>
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