import React, { Component } from "react";
import { Route, Link } from 'react-router-dom';

import { Container, Button } from '../../simple-library';

class Homepage extends Component {
  state = {
    signUpHover: false,
    logInHover: false
  }

  container = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }

  openForm = form => {
    this.props.history.push(`signup/${form}`)
  }

  render() {
    return (
      <Container 
        home
        img = { require('../../assets/views/home.jpeg') }
        style = { this.container }
      >
        <Top>
          <Link to="/login">
            <Button
              style = { topBtn }
            >
              Log In
            </Button>
          </Link>
          <div
            onMouseEnter = { this.state.signUpHover ? null : () => this.setState({ signUpHover: true }) }
            onMouseLeave = { this.state.signUpHover ? () => this.setState({ signUpHover: false }) : null }
          >
            { this.state.signUpHover ? 
              <div style = {{
                display: 'flex',
                flexDirection: 'column'
              }}>
              <Button 
                style = { topBtn }
                onClick = { () => this.openForm('driver') }
              >
                Driver
              </Button>
              <Button 
                style = { topBtn }
                onClick = { () => this.openForm('mother') }
              >
                Mother
              </Button>
              <Button 
                style = { topBtn }
                onClick = { () => this.openForm('caregiver') }
              >
                Caregiver
              </Button>
              </div>
            : 
              <Button>Sign Up</Button>
            }
          </div>
        </Top>
        <div>
          
        </div>
        <MainButtons>
          <Button
            style = { mainBtn }
          >
            Learn More
          </Button>
          <Button
            style = { mainBtn }
          >
            Sign Up
          </Button>
        </MainButtons>
      </Container>
    );
  }
};

const Top = props => {
  const style = {
    position: 'absolute',
    top: '0',
    right: '0',
    display: 'flex'
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

const topBtn = {
  background: 'none',
  color: '#4f6d7a',
  border: '1px solid white'
}

const MainButtons = props => {
  const style = {

  }

  return (
    <div style = { style }>
      { props.children }
    </div>
  )
}

const mainBtn = {
  background: 'none',
  border: '2px solid #fff'
}

export default Homepage;