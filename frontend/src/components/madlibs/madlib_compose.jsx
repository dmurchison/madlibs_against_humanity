import React from 'react';
import MadlibBox from './madlib_box';

class MadlibCompose extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          title: "",
          text: "",
      }

      this.handleSubmit = this.handleSubmit.bind(this);
  } 


  handleSubmit(e) {
    e.preventDefault();
    let madlib = {
      title: this.state.title,
      body: this.state.text
    };

    let {action, formType} = this.props;
    action(madlib);
    if (formType === 'Create'){
      this.setState({title: '',text: ''})  // redirect to user page instead
    }    
  }

  update(fld) {
    return e => this.setState({
      [fld]: e.currentTarget.value
    }).then();
  }

  render() {
    let { formType } = this.props;
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.title} onChange={this.update('title')} placeholder="title"/>
                <textarea
                    value={this.state.text}
                    onChange={this.update('text')}
                    placeholder="Madlib body..."
                />
                <button type="submit">{formType}</button>
            </form>
            <MadlibBox text={this.state.text} />
        </div>
    )
  }
}

export default MadlibCompose;
