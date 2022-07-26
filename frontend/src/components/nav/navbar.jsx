import React from 'react';
import { Link } from 'react-router-dom';
import '../../stylesheets/nav.scss';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout(this.props.currentUser);
    window.location.reload(false);
    this.props.history.push('/');
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
    if (this.props.loggedIn) {
      return (
        <>
          <div className='navbar-links'>
            <Link className='users-madlibs' to={`/users/${this.props.currentUser.id}/madlibs`}>{this.props.currentUser.handle}'s' Madlibs</Link>
            <Link className='create-madlib' to={'/madlibs/new'}>Create a Madlib</Link>
          </div>
          <button className='logout' onClick={this.logoutUser}>Logout</button>
        </>
      );
    } else {
      return (
        <div className='navbar-links'>
          <Link className='signup' to={'/signup'}>Signup</Link>
          <Link className='login' to={'/login'}>Login</Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div className='header-container'>
        <div className='header'>
          <h1 className='header-h1'>
            <Link className='header-h1-link' to={'/'}>Madlibs Against Humanity</Link>
          </h1>
          <br />
          <p>a website for madlibs and friends!</p>
        </div>
        <div className='navbar-container'>
          {this.getLinks()}
        </div>
      </div>
    );
  }
}

export default NavBar;