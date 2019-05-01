import React from 'react';
import { Container, Column, Button } from '../../simple-library';

const MainSignUp = props => {
    return (
        <Container 
            blue
        >
            <Column>
                <h2>Sign Up</h2>
                <p>Already have an account? Sign in here -- LINK -- </p>
            </Column>
                <h3>I am a...</h3>
                <Button default>Driver</Button>
                <Button default>Mother</Button>
                <Button default>Caregiver</Button>
            <Column>
            </Column>
        </Container>
    )
}

export default MainSignUp
