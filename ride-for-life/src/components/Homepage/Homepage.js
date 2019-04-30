import React from "react";
import { Container, Button } from '../../simple-library';

const Homepage = () => {
  return (
    <Container 
      home
      img = { require('./homepage-desktop-img.jpg') }
      style = {{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
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
      <div className="main-text">Welcome to the New Standard of Care.</div>
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
};

const TopButtons = props => {
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