import React from 'react';
import { Container, Column, Button } from '../../simple-library';

const DriverUser = props => { //need to pass driver's first name here
    const userContainer = {
        display: 'flex'
    }

    const userColumn = {
        alignItems: 'center'
    }

    return (
        <Container
            blue
            style={userColumn}
        >
            <Column style={userColumn}>
                {/* <img src='{driver.photo1}' /> */}
                <h2>Hi, {props.driver.firstName}!</h2>
            </Column>
            <Column style={userColumn}>
              <Button default>View Profile</Button>
              <Button default> Edit Profile</Button>
              <Button default>Previous Trips</Button>
              <Button logout />
            </Column>
        </Container>
    )
}

export default DriverUser;
