import React from 'react';
import '../../stylesheets/footer.scss';

const Footer = () => {
  return (
    <div className='footer-container'>
      <h4 className='dev-team'>Developer Team:</h4>

      <div className='footer-dev-info'>

        <div className='Duncans-dev-info'>
          <h5>Duncan Murchison</h5>
        </div>

        <div className='Narans-dev-info'>
          <h5>Naran Ivanchukov</h5>
        </div>

        <div className='Mikes-dev-info'>
          <h5>Mike Hollander</h5>
        </div>

      </div>
    </div>
  )
}

export default Footer;