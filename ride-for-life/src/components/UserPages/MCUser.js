import React from 'react';
import { Container, Column, Button } from '../../simple-library';

const MCUser = () => { //need to pass user's first name here
    return (
        <Container
            blue 
        >
            <Column>
                <h2>Hi, {user.firstName}!</h2>
            </Column>
            <Column>
                <Button save>Request a Ride</Button>
                <Button save>Browse Drivers</Button>
                <Button save>Edit Profile</Button>
                <Button save>Previous Trips</Button>
                <Button logout>Log Out</Button>
            </Column>
        </Container>
    )
}

export default MCUser;