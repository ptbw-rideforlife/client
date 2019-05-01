import React, { Component } from 'react';
import { Container, Text, Column, Form, Button } from '../../simple-library';

export default class Login extends Component {
  // state
  state = {
    credentials: {
      phoneNum: '',
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
    justifyContent: 'space-around',
  }

  input = {
    padding: '15px 5px',
    width: '80%'
  }

  // methods
  login = event => {
    event.preventDefault();
    this.props.login(this.state.credentials)
      .then(() => {
        this.props.history.push('/test')
      })
  }

  // render
  render() {
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
        <Form>
          <Column 
            style = {{
              ...this.column,
              alignItems: 'center'
            }}
          >
            <Text 
              placeholder="Phone Number"
              style = { this.input }
            />
            <Text 
              placeholder="Password"
              style = { this.input }
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

