import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import '../../stylesheets/footer.scss'

const Footer = () => {
  return (
    <footer className='footer-container'>
      <div className='footer-dev-info'>
        Developer Information:
      </div>
      <div className='footer-github-link'>
        <a href='https://github.com/dmurchison/'>
          <FontAwesomeIcon className='footer-github-icon' icon={faGithub} size='2x' />
        </a>
      </div>
    </footer>
  )
}

export default Footer;