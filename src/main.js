import React from 'react';
import ReactDom from 'react-dom';

import '../src/style/_main.scss';


class App extends React.Component {

  constructor (props) {
    super(props);
    this.state = {};
  }

  componentDidUpdate () {
    console.log( ':::::: state ::::::', this.state );
  }

  render () {
    return (
      <div>
        <h1> hello world </h1>
      </div>
    )
  }
}

//create a place to put the app
const container = document.createElement('div')
document.body.appendChild(container);
ReactDom.render(<App />, container);
