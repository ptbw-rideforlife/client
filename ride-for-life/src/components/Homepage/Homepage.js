import React, { Component } from "react";
import { Route, Link } from 'react-router-dom';

import { Container, Button } from '../../simple-library';
import { MobileContainer, MobileButton } from '../../simple-library-mobile';

class Homepage extends Component {
  state = {
    signUpHover: false,
    logInHover: false, 
    signUpClick: false,
    logInClick: false
  }

  container = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100vw 100vh'
  }

  signUpTop = {
    height: '50px',
    width: '150px',
    fontSize: '15px',
    margin: '10px'
  }

  openForm = form => {
    this.props.history.push(`signup/${form}`)
  }

  componentDidMount() {
    window.addEventListener('click', () => this.windowClick())
    this.windowClick()
  }

  windowClick = () => {
    this.setState({ logInclick: false, signUpClick: false })
  }

  openLogin = event => {
    event.stopPropagation();
    this.setState({ logInclick: true })
  }

  openSignup = event => {
    event.stopPropagation();
    this.setState({ signUpClick: true })
  }

  topButton = {
    width: '70vw',
    margin: '10px auto'  
  }

  openLoginTop = {
    width: '30vh',
    margin: '10px 20px'
  }

  openSignupTop = {
    width: '20vh',
    margin: '10px'
  }

  mobileHeader = {
    width: '90%',
    margin: '200px 0 0'
  }

  mobileButtons = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }

  render() {
    // there are multiple ways to use this method. you can either do an if statement in render to render a completely different page, or you can write a function to conditionally load styles, and pass the boolean from props as a parameter, then use ternary operators to do conditional styling based on whether it's mobile or not
    if(this.props.mobile) {
      return (
        <MobileContainer 
          home
          img = { require('../../assets/views/home-mobile.jpeg')} 
          style = {this.container}>
            <MobileTop>
              <div onClick = { event => this.openLogin(event) }>
                { this.state.logInclick ? 
                  <>
                    <MobileButton style={this.openLoginTop}>
                      Rider
                    </MobileButton>
                    <MobileButton style={this.openLoginTop}>
                      Mother
                    </MobileButton>
                  </>
                : 
                  <Link to='/login'>
                    <MobileButton style={this.topButton}>
                      Log In
                    </MobileButton>
                  </Link>
                }
              </div>
              <div onClick = { event => this.openSignup(event) }>
                { this.state.signUpClick ? 
                  <>
                    <Link to='/signup/driver'><MobileButton style={this.openSignupTop}>Driver</MobileButton></Link>
                    <Link to='/signup/mother'><MobileButton style={this.openSignupTop}>Mother</MobileButton></Link>
                    <Link to='/signup/caregiver'><MobileButton style={this.openSignupTop}>Caregiver</MobileButton></Link>
                  </>
                : 
                  <MobileButton style={this.topButton}>
                    Sign Up
                  </MobileButton>
                }
              </div>
          </MobileTop>
          <div  style={this.mobileHeader}><Header>Welcome to the New Standard of Care</Header></div>
          <div style={this.mobileButtons}>
            <MobileButton
                style = { mainBtn }
              >
                Learn More
              </MobileButton>
              <Link to = "/signup">
                <MobileButton
                  style = { mainBtn }
                >
                  Sign Up
                </MobileButton>
              </Link>
          </div>
        </MobileContainer>
      )
    } 
    else {
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
                <Button style={ this.signUpTop }>Sign Up</Button>
              }
            </div>
          </Top>
          <div>
            <Header>Welcome to the New Standard of Care</Header>
          </div>
          <MainButtons>
            <Button
              style = { mainBtn }
            >
              Learn More
            </Button>
            <Link to = "/signup">
              <Button
                style = { mainBtn }
              >
                Sign Up
              </Button>
            </Link>
          </MainButtons>
        </Container>
      );
    }
  };
}

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

const MobileTop = props => {
  const style = {
    position: 'absolute',
    top: '0',
    right: '0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%'
  }

  return (
    <div style= {style}>
      { props.children }
    </div>
  )
}

const Header = props => {
  const style = {
    fontSize: '4rem',
    color: 'white',
    textAlign: 'center'
  }

  return (
    <h1 style = { style }>
      { props.children }
    </h1>
  )
}

const topBtn = {
  backgroundColor: 'rgba(225,225,225,0.7)',
  color: '#4f6d7a',
  border: '1px solid white',
  width: '150px',
  height: '50px',
  margin: '10px', 
  fontSize: '15px',
  textAlign: 'center'
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
  border: '2px solid #fff',
  width: '250px',
  height: '60px',
  fontSize: '17px',
  fontWeight: '600',
  margin: '30px'
}

export default Homepage;