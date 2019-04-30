import React from 'react';
import { Container, GoBack, Button, Text, Form } from '../../simple-library';

const DriverSignUp = props => {
    return (
        <Container>
            <GoBack />
            <h2>Sign Up as a Driver</h2>
            <Form>
                <Text placeholder='First Name' />
                <Text placeholder='Last Name' />
                <Text placeholder='Phone Number' />
                <Text placeholder='Address' />
                <Text placeholder='Price' />
                <Text placeholder='Enter Password' />
                <Text placeholder='Re-Enter Password' />
                {/* <Button>Add Photos</Button> */}
                <Button default> Continue </Button>
            </Form>
        </Container>
    )
}

export default DriverSignUp

//mapStateToProps
//export default connect