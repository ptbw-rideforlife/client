import React from 'react'
import { Container, Button } from '../../simple-library';
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <Container 
      blue
    >
      <div>I am a...</div>
      <div>
        <Link to="/signup/driver">
          <Button>Driver</Button>
        </Link>
        <Link to="signup/mother">
          <Button>Mother</Button>
        </Link>
        <Link to="signup/caregiver">
          <Button>Caregiver</Button>
        </Link>
      </div>
    </Container>
  )
}
