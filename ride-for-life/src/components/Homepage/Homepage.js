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
        img = 
        style = { this.container }
      >
        <TopButtons>
          <Button
            style = { topBtn }
          >
            Log In
          </Button>
          <Button
            style = { topBtn }
          >
            Sign Up
          </Button>
        </TopButtons>
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