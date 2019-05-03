import React from 'react';
import { Container, Column, Button } from '../../simple-library';

const MCUser = () => { //need to pass user's first name here
    const userContainer = {
        display: 'flex'
    }

    const userColumn = {
        alignItems: 'center'
    }

    return (
        <Container
            blue 
            style={userContainer}
        >
            <Column style={userColumn}>
                <h2>Hi, {user.firstName}!</h2>
            </Column>
            <Column style={userColumn}>
                <Button default>Request a Ride</Button>
                <Button default>Browse Drivers</Button>
                <Button default>Edit Profile</Button>
                <Button default>Previous Trips</Button>
                <Button logout />
            </Column>
        </Container>
    )
}

export default MCUser;