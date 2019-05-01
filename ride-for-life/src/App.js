import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { Container, Button } from './simple-library';
import Login from './components/Login/Login';
import MainSignUp from './components/Signup/MainSignUp';
import DriverSignUp from './components/Signup/DriverSignUp';
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
        <React.Fragment>
          <div style={{
            position: 'absolute',
            zIndex: 10000,
            top: '1vh',
            left: '1vw'
          }}>
            <Link to='/DriverSignUp'>TEST</Link>
            <Route path="/DriverSignUp" component={DriverSignUp} />
          </div>
        </React.Fragment>

        <React.Fragment>
          <Container
            home
            img = { require('./assets/views/home.jpeg') }
            style = { this.container }
          >
            <Top>
              <Link to='/login'>
                <Button>
                  Log In
                </Button>
              </Link>
              <Link to="/signup">
                <Button>
                  Sign Up
                </Button>
              </Link>
            </Top>
            <Header>Welcome to the New Standard of Care.</Header>
            <div>
              <Button>
                temp btn 1
              </Button>
              <Button>
                temp btn 2
              </Button>
            </div>
          </Container>
          <Route path="/login" component = { Login } />
          <Route path="/signup" component = { MainSignUp } />
          <PrivateRoute exact path="test" component = { Test } /> 
        </React.Fragment>
      </Router>
    )
  } 
}

const Test = () => {
  return (
    <div>
      test component
    </div>
  )
} 

const Top = props => {
  const style = {
    position: 'absolute',
    top: '0',
    right: '0'
  }

  return (
    <div style = { style }>
      { props.children }
    </div>
  );
}

const Header = props => {
  const style = {
    fontSize: '2rem',
    color: 'white'
  }

  return (
    <h1 style = { style }>
      { props.children }
    </h1>
  )
}

{/* <Router>
  <>
    <Link to="/login">Login</Link>
    <Route path = "/login" component = { Login } />
    <PrivateRoute exact path="/test" component = { Test } />
  </>
</Router>
*/}
 
export default App;


  // componentDidMount() {
  //   this.props.fetchDriver();
  //   this.props.fetchNearby();
  //   this.props.fetchAll();
  //   this.props.fetchPreviousDriver();
  //   this.props.fetchPreviousMC();
  //   this.props.fetchReviews();    
  // }
  
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     drivers: [],
  //     users: []
  //   }
  // }

  // <>
  //   <Route path='/DriverSignUp' render={props => [
  //     (
  //       <DriverSignUp
  //         {...props}
  //       />  
  //     )
  //   ]} /> 
  // </> 