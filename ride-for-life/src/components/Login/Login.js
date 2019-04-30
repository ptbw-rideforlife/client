import React from 'react';
import { Container, Text, Column, Form, Button } from '../../simple-library';

export default function Login() {
  const container = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  const header = {
    fontSize: '2rem'
  }

  const under = {
    fontSize: '0.8rem'
  }

  const column = {
    height: '40vh',
    width: '35vw',
    justifyContent: 'space-around',
  }

  const input = {
    padding: '15px 5px',
    width: '80%'
  }

  return (
    <Container
      blue
      style = { container }
    >
      <Column 
        style = { column }
      >
        <div style = { header }>Log In</div>
        <p style = { under }>Don't have an account? Sign up --LINK--</p>
        <div></div>
      </Column>
      <Form>
        <Column 
          style = {{
            ...column,
            alignItems: 'center'
          }}
        >
          <Text 
            placeholder="Phone Number"
            style = { input }
          />
          <Text 
            placeholder="Password"
            style = { input }
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

