import React from 'react';
import { Container, Text, Button } from '../../simple-library';

class DriverEdit extends React.Component {
    // const bioStyle = {
    //     border: '2px solid #707070',
    //     borderRadius: '5px'
    // }

    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value})
    }

    render() {
        return (
            <Container>
                <h2>{props.driver.firstName} {props.driver.lastName}</h2>
                <h2>{props.driver.address}</h2>
                <div style={bioStyle}>
                    <h4>About {props.driver.firstName}</h4>
                    <p>{props.driver.bio}</p>
                    {/* Button --> Text textarea */}
                    <Button>Edit Bio</Button> 
                </div>
                <Form>
                    <Text 
                        placeholder='Phone Number' 
                        onChange={this.handleInputChange}/>
                    <Text 
                        placeholder='Address' 
                        onChange={this.handleInputChange}/>
                    <Text 
                        placeholder='Price' 
                        onChange={this.handleInputChange}/>
                    <Text 
                        placeholder='Enter New Password' 
                        onChange={this.handleInputChange}/>
                    <Text 
                        placeholder='Re-enter New Password' 
                        onChange={this.handleInputChange}/>
                    {/* <Button>Upload Another Photo</Button> 
                    <img src='{driver.photos.photo1}'/>
                    <img src='{driver.photos.photo2}' />
                    <img src='{driver.photos.photo3' /> */}
                    <Button cancel>Cancel</Button>
                    <Button delete>Delete Profile</Button>
                    <Button default>Save</Button>
                </Form>
            </Container>
        )
    }
}

//mapStateToProps
//export default connect

export default DriverEdit;