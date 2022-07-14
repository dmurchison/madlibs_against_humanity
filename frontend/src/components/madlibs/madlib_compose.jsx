import React from 'react';
import MadlibBox from './madlib_box';

class MadlibCompose extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        title: '',
        body: '',
        errors: ''
      }
      
      this.handleSubmit = this.handleSubmit.bind(this);
  } 

  componentDidMount() {
    if (this.props.formType === 'Edit'){
      this.props.fetchMadlib()
        .then(()=>this.setState({
          title: this.props.currentMadlib.title,
          body: this.props.currentMadlib.body
      }))
    }
  }

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
      .then(() =>this.props.history.push(`/madlibs/${madlib._id}`)) 
  }

  update(fld) {
    return e => this.setState({
      [fld]: e.currentTarget.value
    })
  }

  render() {
    debugger;
    let { formType } = this.props;
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.title} onChange={this.update('title')} placeholder="title"/>

                <textarea
                    value={this.state.body}
                    onChange={this.update('body')}
                    placeholder="Madlib body..."
                />

                <button type="submit">{formType}</button>

            </form>
            <MadlibBox title={this.state.title} body={this.state.body} />
        </div>
    )
  }
}

export default MadlibCompose;
