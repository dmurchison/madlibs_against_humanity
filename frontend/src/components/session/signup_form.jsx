import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      handle: '',
      password: '',
      password2: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      handle: this.state.handle,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.signup(user); 
  }

  renderErrors() {
    return(
      <ul>
        {
            this.props.errors.map( (error, i) => (
                <li key={`error-${i}`}>
                    { error }
                </li>
            ))
        }
      </ul>
    );
  }

  render() {
    return (
      <div className="signup-form-container">
        <form onSubmit={this.handleSubmit}>
          <div className="signup-form">
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
              />
            
              <input type="text"
                value={this.state.handle}
                onChange={this.update('handle')}
                placeholder="Handle"
              />
            
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
              />
            
              <input type="password"
                value={this.state.password2}
                onChange={this.update('password2')}
                placeholder="Confirm Password"
              />
            
            <input type="submit" value="Submit" />
            
            {this.renderErrors()}
          </div>
        </form>
      </div>
    );
  }
}

export default SignupForm;
