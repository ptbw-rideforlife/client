import React from 'react';
import { Container, Text, Button } from '../../simple-library';

class DriverEdit extends React.Component {
    state = {
        editing: false
    }

    bioStyle = {
        border: '2px solid #707070',
        borderRadius: '5px',
        padding: '10px 20px',
        width: '50%'
    }

    singleColumn = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }

    editBio = {
        position: 'relative',
        left: '90%',
        bottom: '10px'
    }

    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value})
    }

    editing = () => {
        this.setState({ editing: true })
    }

    render() {
        return (
            <Container>
                <div style={singleColumn}>
                    <h2>{props.driver.firstName} {props.driver.lastName}</h2>
                    <h2>{props.driver.address}</h2>
                    <div style={bioStyle}>
                        <h4>About {props.driver.firstName}</h4>
                        {this.state.editing 
                            ?  <div>
                                    <p>{props.driver.bio}</p>
                                    <Button style={editBio} onClick={() => this.editing()}>Edit Bio</Button> 
                                </div>
                            :   <div>
                                    <Text textarea />
                                    <Button style={editBio}>Save Bio</Button>
                                </div>
                        }
                    </div>
                    <Form>
                        <Text 
                            placeholder='Phone Number' 
                            onChange={this.handleInputChange}/><br></br>
                        <Text 
                            placeholder='Address' 
                            onChange={this.handleInputChange}/><br></br>
                        <Text 
                            placeholder='Price' 
                            onChange={this.handleInputChange}/><br></br>
                        <Text 
                            placeholder='Enter New Password' 
                            onChange={this.handleInputChange}/><br></br>
                        <Text 
                            placeholder='Re-enter New Password' 
                            onChange={this.handleInputChange}/><br></br>
                        {/* <Button>Upload Another Photo</Button> 
                        <img src='{driver.photos.photo1}'/>
                        <img src='{driver.photos.photo2}' />
                        <img src='{driver.photos.photo3' /> */}
                        <Button cancel /><br></br>
                        <Button delete /><br></br>
                        <Button default /><br></br>
                    </Form>
                </div>
            </Container>
        )
    }
}

//mapStateToProps
//export default connect

export default DriverEdit;