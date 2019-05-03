import React from 'react';
import { Container, Text, Button } from '../../simple-library';

class MCEdit extends React.Component {
    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value})
    }

    editForm = {
        margin: '0 auto'
    }

    render() {
        return (
            <Container>
                <Form style={editForm}>
                    <Text 
                        placeholder='Phone Number' 
                        onChange={this.handleInputChange}
                        /><br></br>
                    <Text 
                        placeholder='Address' 
                        onChange={this.handleInputChange}
                        /><br></br>
                    <Text 
                        placeholder='Enter New Password' 
                        onChange={this.handleInputChange}
                        /><br></br>
                    <Text 
                        placeholder='Re-enter New Password' 
                        onChange={this.handleInputChange}
                        /><br></br>
                    <Button cancel /><br></br>
                    <Button delete /><br></br>
                    <Button default /><br></br>
                </Form>
            </Container>
        )
    } 
}

//mapStateToProps
//export default connect

export default MCEdit;