//npm modules
import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';

//app modules
import AboutContainer from './component/about-container/index.js'
import DashboardContainer from './component/dashboard-container/index.js'
import Navbar from './component/navbar/index.js';

import '../src/style/_main.scss';


class App extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      budget: 400,
      expenses: [],
    };
    this.getApp = this.getApp.bind(this);
  }

  componentDidUpdate () {
    console.log( ':::::: state ::::::', this.state );
  }

//whenever getState actually uses App component's context
//we pass our App state down to children components, and they can update PARENT(app) STATE with this function! the children can update APP state by calling
//this.props.app.setState to update APP state.
  getApp () {
    return {
      state: this.state,
      setState: this.setState.bind(this),
    }
  }

  render () {
    return (
      <main>
        <p> boop </p>
        <BrowserRouter>
          <div>
            <Route
              exact path='/about'
              component={AboutContainer}
            />
            <Route
              exact path='/dashboard'
              component={ () => <DashboardContainer app={this.getApp()} /> }
            />
          </div>
        </BrowserRouter>
      </main>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'));
