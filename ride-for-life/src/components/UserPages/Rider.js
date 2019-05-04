import React, { Component } from 'react';
import { Container, Column, Button } from '../../simple-library';
import withAuth from '../Login/withAuth';

class MCUser extends Component { //need to pass user's first name here
  userContainer = {
    display: 'flex'
  }

  userColumn = {
    alignItems: 'center'
  }

  componentDidMount() {
    withAuth()
      .get('https://ride4life.herokuapp.com/users')
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <Container
        blue 
        style={this.userContainer}
      >
        <Column style={this.userColumn}>
          <h2>Hi, {/* user.firstName */}!</h2>
        </Column>
        <Column style={this.userColumn}>
          <Button default>Request a Ride</Button>
          <Button default>Browse Drivers</Button>
          <Button default>Edit Profile</Button>
          <Button default>Previous Trips</Button> 
          <Button logout />
        </Column>
      </Container>
    )
  }
}

export default MCUser;