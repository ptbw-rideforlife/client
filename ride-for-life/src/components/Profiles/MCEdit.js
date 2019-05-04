import React from 'react';
import { Container, Text, Button } from '../../simple-library';
import { updateMC, deleteMC } from '../../actions/mc-actions';

class MCEdit extends React.Component {
    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value})
    }

    handleUpdate = event => {
        this.props.updateMC()
    }

    handleDelete = event => {
        this.props.deleteMC()
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
                    {/* need cancel functionality */}
                    <Button cancel /><br></br>
                    <Button delete onClick={this.handleDelete}/><br></br>
                    <Button default onClick={this.handleUpdate}/><br></br>
                </Form>
            </Container>
        )
    } 
}

const mapStateToProps = state => {
    return {
        updatingMC: state.mcReducer.updatingMC,
        deletingMC: state.mcReducer.deletingMC
    }
}

export default connect(
    mapStateToProps, 
    { updateMC, deleteMC }
)(MCEdit)