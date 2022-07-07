import React from 'react';
import { Link } from 'react-router-dom';
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
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
      if (this.props.loggedIn) {
        return (
            <header className='navbar-container'>
                <Link to={'/madlibs'}>All Madlibs</Link>
                <Link to={'/profile'}>Profile</Link>
                <Link to={'/madlibs/new'}>Create a Madlib</Link>
                <button onClick={this.logoutUser}>Logout</button>
            </header>
        );
      } else {
        return (
            <header className='navbar-container'>
                <Link to={'/signup'}><button>Signup</button></Link>
                <Link to={'/login'}><button>Login</button></Link>
            </header>
        );
      }
  }

  render() {
      return (
        <header className='navbar-container'>
            <Link to='/'>
              <h1 className='navbar-text'>MadLibs fabFUIbviweubUIBEVFUBDSNOGWENNFLASKFNAAL;'KWPQMF;EN'FENLN;V;WENVJC</h1>
            </Link>
            { this.getLinks() }
        </header>
      );
  }
}

export default NavBar;