import React, { Component } from 'react'
import { Container, Button } from '../../simple-library';
import { MobileContainer, MobileButton } from '../../simple-library-mobile'
import { Link } from 'react-router-dom'

class SignUp extends Component {
  header = {
    color: '#fff',
    marginBottom: '20px'
  }

  headerMobile = {
    color: '#fff',
    marginBottom: '20px',
    textAlign: 'center',
    width: '100%'
  }

  signUpContainer = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  }

  signUpContainerMobile = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }

  iAm = {
    display: 'flex',
    flexDirection: 'column'
  }

  buttons = {
    display: 'flex',
    flexDirection: 'column'
  }

  iAmHeader = {
    color: '#fff',
    fontSize: '30px'
  }

  iAmHeaderMobile = {
    color: '#fff',
    fontSize: '30px',
    textAlign: 'center',
    paddingBottom: '20px'
  }

  link = {
    textDecoration: 'none',
    color: '#e89980'
  }

  button = {
    width: '20vw',
    margin: '20px 0',
    cursor: 'pointer'
  }

  buttonMobile = {
    width: '80vw',
    cursor: 'pointer'
  }

  paragraph = {
    textAlign: 'center',
    paddingBottom: '30px'
  }

  render() {
    if(this.props.mobile) {
      return (
        <MobileContainer
          blue 
          style={this.signUpContainerMobile}
          { ...this.props }
        >
          <div>
            <h2 style={this.headerMobile}>Sign Up</h2>
            <p style={this.paragraph}>Already have an account? Log in <Link to='/login' style={this.link}>here</Link>.</p>
          </div>
          <div style={this.iAm}>
            <h2 style={this.iAmHeaderMobile}>I am a...</h2>
              <div style={this.buttons}>
                <Link to="/signup/driver">
                  <MobileButton style={this.buttonMobile}>Driver</MobileButton>
                </Link>
                <Link to="signup/mother">
                  <MobileButton style={this.buttonMobile}>Mother</MobileButton>
                </Link>
                <Link to="signup/caregiver">
                  <MobileButton style={this.buttonMobile}>Caregiver</MobileButton>
                </Link>
              </div>
          </div>
        </MobileContainer>
      )
    } 
    else return (
      <Container 
        blue
        style={this.signUpContainer}
        { ...this.props }
      >
        <div>
          <h2 style={this.header}>Sign Up</h2>
          <p>Already have an account? Log in <Link to='/login' style={this.link}>here</Link>.</p>
        </div>
        <div style={this.iAm}>
        <h2 style={this.iAmHeader}>I am a...</h2>
          <div style={this.buttons}>
            <Link to="/signup/driver">
              <Button style={this.button}>Driver</Button>
            </Link>
            <Link to="signup/mother">
              <Button style={this.button}>Mother</Button>
            </Link>
            <Link to="signup/caregiver">
              <Button style={this.button}>Caregiver</Button>
            </Link>
          </div>
        </div>
      </Container>
    )
  }
}

export default SignUp