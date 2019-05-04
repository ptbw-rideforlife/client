import React from 'react';
import { Container, Text, Column, Button, Form } from '../../simple-library';

export default function AddReview() {
  const container = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    fontSize: '1.5rem'
  }

  return (
    <Container
      blue
      style = { container }
    >
      <Column>
        <p>Driver: -- DRIVER --</p>
        <p>Date: -- DATE --</p>
        <p>Price: -- PRICE --</p>
      </Column>
      <Form>
        <Column>
          <p>Please rate your driver out of 5 stars:</p>
          <p>-- RATING --</p>
          <Text 
            textarea 
            cols = { 100 }
            rows = { 25 }
            placeholder="Add a review..."

          />
          <div>
            <Button cancel />
            <Button delete />
            <Button
                submit
                style = {{
                  width: '25%',
                  alignSelf: 'flex-end',
                  marginTop: '10px'
                }} />
          </div>
        </Column>
      </Form>
    </Container>
  )
}
