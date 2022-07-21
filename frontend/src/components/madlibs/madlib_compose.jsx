import React from 'react';
import MadlibBox from './madlib_box';
import '../../stylesheets/madlib.scss';

class MadlibCompose extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      errors: false
    }
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  };

  componentDidMount() {
    if (this.props.formType === 'Edit'){
      this.props.fetchMadlib()
        .then(()=>this.setState({
          title: this.props.currentMadlib.title,
          body: this.props.currentMadlib.body
      }))
    }
  }

  // componentWillUnmount() {
  //   this.props.removeMadlibErrors();
  // }

  handleSubmit(e) {
    e.preventDefault();
    // if (!this.state.body.split(' ').includes(/noun|nouns|adjective|verb|adverb/i)){
    //   this.setState({errors: 'Madlib must contain blanks'})
    //   return null
    // }
    let madlib = {
      id: this.props.currentUser,
      _id: this.props.currentMadlib ? this.props.currentMadlib._id : null,
      title: this.state.title,
      body: this.state.body
    };
    this.props.action(madlib)
      .then( () => {
        this.props.errors.body ? this.setState({errors: true}) : this.props.history.push('/') 
      })
  }

  update(fld) {
    return e => this.setState({
      [fld]: e.currentTarget.value
    })
  }

  renderErrors() {
    return (
      <ul>
        {
          Object.values(this.props.errors).map((error, i) => (
            <li key={`error-${i}`}>
              { error }
            </li>
          ))
        }
      </ul>
    )
  }

  render() {
    let { formType } = this.props;
    return (
      <div className='madlib-compose-container'>

        <form className='madlib-compose-form' onSubmit={this.handleSubmit}>
          <h3 className='create-madlib-here'>Create or Edit Madlib Here!</h3>

          <div className='madlib-compose-errors'>
            {this.renderErrors()}
          </div>

          <div className='madlib-compose-title'>
            <input 
              type="text"
              value={this.state.title} 
              onChange={this.update('title')}
              placeholder="title"
            />
          </div>

          <div className='madlib-compose-body'>
            <textarea
              className='madlib-compose-textarea'
              value={this.state.body}
              onChange={this.update('body')}
              placeholder="Example: I am going to the [place] with a lot of [things]. I can't wait to have a [adjective] time!"
            />
          </div>

          <button className='madlib-compose-submit-button' type="submit">{formType}</button>

        </form>
          <MadlibBox title={this.state.title} body={this.state.body} />
      </div>
    )
  }
}

export default MadlibCompose;
