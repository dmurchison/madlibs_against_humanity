import React from 'react';
import '../../stylesheets/login.scss';

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
      <div className='login-form-container'>
        <form className='login-form' onSubmit={this.handleSubmit}>
          <h3 className='login-here'>Login Here!</h3>
          <div className='login-form-email'>
            <input type="text"
              value={this.state.email}
              onChange={this.update('email')}
              placeholder="Email"
            />
          </div>

          <div className='login-form-password'>
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              placeholder="Password"
            />
          </div>

            <button className='login-button' type='submit'>Log In</button>
            {this.renderErrors()}

        </form>
      </div>
    );
  }
}

export default LoginForm;