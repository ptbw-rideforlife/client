import React, { Component } from 'react';
import { connect } from 'react-redux';

import { userLogin } from '../../actions';
import { Container, Text, Column, Form, Button } from '../../simple-library';
import { MobileContainer, MobileForm, MobileButton } from '../../simple-library-mobile'

class Login extends Component {
  // state
  state = {
    credentials: {
      phoneNumber: '',
      password: ''
    }
  }

  // styles
  container = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  mobileContainer = {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
 }


  under = {
    fontSize: '1rem',
    paddingBottom: '30px'
  }

  column = {
    height: '40vh',
    width: '35vw',
    justifyContent: 'space-around'
  }

  input = {
    padding: '15px 5px',
    width: '100%',
    borderRadius: '10px',
    fontSize: '14px',
    margin: '20px 0',
    borderRadius: '10px'
  }

  header = {
    color: '#ffffff'
  }

  headerMobile = {
    color: '#ffffff',
    paddingBottom: '20px'
  }

  mobileLogin = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  }

  // methods
  login = event => {    
    event.preventDefault();
    this.props.userLogin(this.state.credentials)
      .then(() => this.props.history.push('/test'))
  }

  handleChange = event => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [event.target.name]: event.target.value
      }
    })
  }

  // render
  render() {
    const { phoneNumber, password } = this.state.credentials;

    if(this.props.mobile) {
      if(this.props.loggingIn) {
        return <div>Logging In...</div>
      }
      else {  
        return (
          <MobileContainer
            blue>
            <div style={this.mobileContainer}>
                <h2 style={this.headerMobile}>Log In</h2>
                <p style={this.under}>Don't have an account? Sign up.</p>
                <MobileForm onSubmit = {this.login} style={this.mobileLogin}>
                  <Text 
                    name="phoneNumber"
                    type="number"
                    value = { phoneNumber }
                    placeholder="Phone Number"
                    style = { this.input }
                    onChange = { this.handleChange }
                  />
                  <Text 
                    name="password"
                    type="password"
                    value = { password }
                    placeholder="Password"
                    style = { this.input }
                    onChange = { this.handleChange }
                  />
                  <MobileButton 
                    submit> Log In</MobileButton>
                </MobileForm>
            </div>
          </MobileContainer>
        )
      }
    }
    else if(this.props.loggingIn) {
      return <div>logging in, temp</div>
    } else {
      return (
        <Container
          blue
          style = { this.container }
        >
          <Column 
            style = { this.column }
          >
            <h2 style={this.header}>Log In</h2>
            <p style = { this.under }>Don't have an account? Sign up --LINK--</p>
            <div></div>
          </Column>
          <Form
            onSubmit = { this.login }
          >
            <Column 
              style = {{
                ...this.column,
                alignItems: 'center'
              }}
            >
              <Text 
                name="phoneNumber"
                type="number"
                value = { phoneNumber }
                placeholder="Phone Number"
                style = { this.input }
                onChange = { this.handleChange }
              />
              <Text 
                name="password"
                type="password"
                value = { password }
                placeholder="Password"
                style = { this.input }
                onChange = { this.handleChange }
              />
              <Button
                submit
                style = {{
                  width: '50%'
                }}
              >
                Log In
              </Button>
            </Column>
          </Form>
        </Container>
      )
    }
  }
}

const mapStateToProps = state => ({
  loggingIn: state.loginReducer.loggingIn
})

export default connect(mapStateToProps, { userLogin })(Login)