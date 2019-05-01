import React from 'react';
import { Container, Form, Text, Button } from '../../simple-library';
import Map from './Map';

export default function BrowseNearby() {
  return (
    <Container
      blue
    >
      <Map 
        width = { "100vw" }
        height = { "50vh" }
      />
      <Form style = { location }>
        <Text 
          placeholder="Your Location"
          width = { "60%" }
        />
        <Button submit />
      </Form>
      <div style = {{margin: '10px'}}>Browse All Drivers:</div>
      <div style = {{margin: '10px', color: 'black'}}>-- RENDERED DRIVERS--</div>
    </Container>
  )
}

const location = {
  display: 'flex',
  width: '50%',
  margin: '10px 0',
  justifyContent: 'space-around'
}