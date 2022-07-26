import React from 'react';
import '../../stylesheets/session_forms.scss';

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
    this.handleDemo = this.handleDemo.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  // clears errors from login form
  componentWillUnmount() {
    this.props.removeSessionErrors();
  }

  handleSubmit() {
    // e.preventDefault();
    let user = {
      email: this.state.email,
      handle: this.state.handle,
      password: this.state.password,
      password2: this.state.password2
    };
    this.props.signup(user); 
  }

  handleDemo(e) {
    e.preventDefault();
    const demo = {
      email: 'demouser@email.com',
      password: 'password'
    };
    this.props.login(demo);
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
        <form className='signup-form' onSubmit={this.handleSubmit}>
          <h3 className='signup-here'>Signup Here!</h3>

          <div className='session-form-errors'>
            {this.renderErrors()}
          </div>

          <div className='signup-form-email'>
            <input type="text"
              value={this.state.email}
              onChange={this.update('email')}
              placeholder="Email"
            />
          </div>
        
          <div className='signup-form-handle'>
            <input type="text"
              value={this.state.handle}
              onChange={this.update('handle')}
              placeholder="Handle"
            />
          </div>
          
          <div className='signup-form-password'>
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              placeholder="Password"
            />
          </div>
        
          <div className='signup-form-password'>
            <input type="password"
              value={this.state.password2}
              onChange={this.update('password2')}
              placeholder="Confirm Password"
            />
          </div>
          
          <button className='signup-button' type='submit'>Sign Up</button>

          <div className='demoLogin'>
            <p>Click here to log in as a demo user!</p>
            <button className='demoLogin-btn' onClick={this.handleDemo}>Demo Login</button>
          </div>
          
        </form>

      </div>
    );
  }
}

export default SignupForm;
