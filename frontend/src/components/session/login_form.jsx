import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  // Handle input field updates
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  // Handle form submission
  handleSubmit(e) {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.login(user); 
  }

  // Render the session errors if there are any
  renderErrors() {
    return(
      <ul>
        {
            this.props.errors.map((error, i) => (
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
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type="text"
              value={this.state.email}
              onChange={this.update('email')}
              placeholder="Email"
            />
            
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              placeholder="Password"
            />

            <input type="submit" value="Submit" />
            
            {this.renderErrors()}
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;