import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Homepage from './components/Homepage/Homepage';
import Login from './components/Login/Login';
import SignUp from './components/Signup/SignUp';
import SignUpForm from './components/Signup/SignUpForm';
import Rider from './components/UserPages/Rider';
import Timer from './components/RideMaps/Timer';
import PrivateRoute from './components/Login/PrivateRoute';

class App extends Component {
  state = {
    mobile: false
  }

  componentDidMount() {
    window.addEventListener("resize", () => this.resize());
    this.resize();
  }

  resize() {
    let current = (window.innerWidth <= 600);
    if(current !== this.state.current) {
      this.setState({mobile: current});
    }
  }

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
            // openForm = { this.openForm }
            mobile = { this.state.mobile }
          />
        ) } />
        <Route path="/login" exact render = { props => (
          <Login
            {...props}
            mobile = { this.state.mobile } />
        )
        }/>
        <Route path="/signup" exact component = { SignUp } />
        <Route path="/signup/:form" exact render = { props => (
          <SignUpForm 
            { ...props }
            mobile = {this.state.mobile}
          />
        )} />
        <Route path="/users/" exact component = { Rider } />
        <Route path = "/timer-test" exact component = { Timer } />
      </Router>
    )
  } 
}
 
export default App;