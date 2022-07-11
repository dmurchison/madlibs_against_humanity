import React from 'react';
import { Link } from 'react-router-dom';
// import { withRouter } from 'react-router-dom';
import '../../stylesheets/navbar.scss'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
      window.location.reload(false);
      // this.props.history.push('/');
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
      if (this.props.loggedIn) {
        return (
            <>
              <div className='navbar-links-container'>
                  <Link className='navbar-users-madlibs' to={'/madlibs'}>{this.props.currentUser}'s' Madlibs</Link>
                  <Link className='navbar-users-profile' to={'/profile'}>{this.props.currentUser}</Link>
                  <Link className='navbar-create-madlib' to={'/madlibs/new'}>Create a Madlib</Link>
              </div>
              <button className='navbar-logout' onClick={this.logoutUser}>Logout</button>
            </>
        );
      } else {
        return (
            <div className='navbar-signup-login-btns'>
                <Link to={'/signup'}><button className='navbar-signup'>Signup</button></Link>
                <Link to={'/login'}><button className='navbar-login'>Login</button></Link>
            </div>
        );
      }
  }

  render() {
      return (
        <header className='navbar-container'>
            <Link className='navbar-text' to='/'>
              <h1>MadLibs</h1>
            </Link>
            <span className='navbar-buttons'>{ this.getLinks() }</span>
        </header>
      );
  }
}

export default NavBar;