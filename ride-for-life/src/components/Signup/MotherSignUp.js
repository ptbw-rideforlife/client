import React from 'react';
import { Container, GoBack, Button, Text, Form } from '../../simple-library';

const MotherSignUp = () => {
    return (
        <Container>
            <GoBack />
            <h2>Sign Up as a Mother</h2>
            <Form>
                <Text placeholder='First Name' />
                <Text placeholder='Last Name' />
                <Text placeholder='Phone Number' />
                <Text placeholder='Address' />
                <Text placeholder='Enter Password' />
                <Text placeholder='Re-enter Password' />
                <Button default>Continue</Button>
            </Form>
        </Container>
    )
}

export default MotherSignUp;

//mapStateToProps
//export default connect