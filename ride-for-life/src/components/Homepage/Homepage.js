import React, { Component } from "react";
import { Route, Link } from 'react-router-dom';

import { Container, Button } from '../../simple-library';

class Homepage extends Component {
  container = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
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
          <Link to="/signup">
            <Button
              style = { topBtn }
            >
              Sign Up
            </Button>
          </Link>
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