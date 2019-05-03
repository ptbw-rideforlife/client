import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Homepage from './components/Homepage/Homepage';
import Login from './components/Login/Login';
import SignUpForm from './components/Signup/SignUpForm';
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
        <Route path="/" exact render = { props => (
          <Homepage 
            { ...props }
            openForm = { this.openForm }
          />
        ) } />
        <Route path="/login" exact component = { Login } />
        <Route path="/signup/:form" exact render = { props => (
          <SignUpForm 
            { ...props }
          />
        )} />
      </Router>
    )
  } 
}
 
export default App;