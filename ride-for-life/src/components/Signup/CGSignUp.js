import React from 'react';
import { Container, Button, Text, Form } from '../../simple-library';

class CGSignUp extends React.Component {
    render() {
        return (
            <Container>
                <h2>Sign Up as a Caregiver</h2>
                <Form>
                    <Text placeholder='Caregiver First Name' />
                    <Text placeholder='Caregiver Last Name' />
                    <Text placeholder='Mother First Name' />
                    <Text placeholder='Mother Last Name' />
                    <Text placeholder='Phone Number' />
                    <Text placeholder='Address' />
                    <Text placeholder='Enter Password' />
                    <Text placeholder='Re-enter Password' />
                    <Button default>Continue</Button>
                </Form>
            </Container>
        )
    }
}

export default CGSignUp;

//mapStateToProps
//export default connect