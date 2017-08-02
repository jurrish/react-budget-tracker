import React from 'react';
import Navbar from '../navbar/index.js';

class AboutContainer extends React.Component {
  render () {
    return (
      <div className='about-container'>
        <Navbar />
        <p> I am about container </p>
      </div>
    )
  }
}

export default AboutContainer;
