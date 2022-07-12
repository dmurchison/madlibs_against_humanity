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
      this.props.history.push('/');
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
      if (this.props.loggedIn) {
        return (
          <>
            <div className='navbar-links'>
              <Link className='users-madlibs' to={'/madlibs'}>{this.props.currentUser}'s' Madlibs</Link>
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
              <Link className='header-h1-link' to={'/'}>Mad Liber</Link>
            </h1>
            <br />
            <p>A website for Madlibs and Friends!</p>
          </div>
          <div className='navbar-container'>
            {this.getLinks()}
          </div>
        </div>









        // <div className='navbar-container'>
        //   <header className='navbar-header'>
        //     <h1>
        //       <Link className='navbar-text' to='/'>MadLibs</Link>
        //     </h1>
        //     <span className='navbar-buttons'>{ this.getLinks() }</span>
        //   </header>
        // </div>
      );
  }
}

export default NavBar;