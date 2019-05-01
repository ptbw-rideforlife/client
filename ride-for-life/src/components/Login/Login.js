import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { userLogin } from '../../actions';
import { Container, Text, Column, Form, Button } from '../../simple-library';

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

  header = {
    fontSize: '2rem'
  }

  under = {
    fontSize: '0.8rem'
  }

  column = {
    height: '40vh',
    width: '35vw',
    justifyContent: 'space-around'
  }

  input = {
    padding: '15px 5px',
    width: '100%'
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

    if(this.props.loggingIn) {
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
            <div style = { this.header }>Log In</div>
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