import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Homepage from './components/Homepage/Homepage';
import Login from './components/Login/Login';
import MainSignUp from './components/Signup/MainSignUp';
import PrivateRoute from './components/Login/PrivateRoute';

class App extends Component {
  // styles
  container = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column'
  }

  render() {
    return (
      <Router>
        <Homepage />
        <Route path="/login" exact component = { Login } />
        <Route path="/signup" exact component = { MainSignUp } />
        <PrivateRoute exact path="/test" exact component = { () => {
          return(
            <div>hello</div>
          )
        } } /> 
      </Router>
    )
  } 
}
 
export default App;