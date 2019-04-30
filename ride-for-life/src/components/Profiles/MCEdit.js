import React from 'react';
import { Container, GoBack, Text, Button } from '../../simple-library';

const MCEdit = props => {
    return (
        <Container>
            <GoBack />
            <Form>
                <Text placeholder='Phone Number' />
                <Text placeholder='Address' />
                <Text placeholder='Enter New Password' />
                <Text placeholder='Re-enter New Password' />
                <Button cancel>Cancel</Button>
                <Button delete>Delete Profile</Button>
                <Button default>Save</Button>
            </Form>
        </Container>
    )
}

//mapStateToProps
//export default connect

export default MCEdit;