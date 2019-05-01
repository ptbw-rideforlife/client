import React from 'react';
import { Container, Column, Button } from '../../simple-library';

const DriverUser = props => { //need to pass driver's first name here
    return (
        <Container
            blue
        >
            <Column>
                {/* <img src='{driver.photo1}' /> */}
                <h2>Hi, {user.firstName}!</h2>
            </Column>
            <Column>
              <Button save>View Profile</Button>
              <Button save> Edit Profile</Button>
              <Button save>Previous Trips</Button>
              <Button logout>Log Out</Button>
            </Column>
        </Container>
    )
}

export default DriverUser;
