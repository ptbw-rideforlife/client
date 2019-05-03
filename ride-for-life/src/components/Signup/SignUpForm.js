import React, { Component } from 'react';
import { connect } from 'react-redux';

import { add } from '../../actions';
import { Container, Form, Column, Button, Text } from '../../simple-library';

class SignUp extends Component {
  state = {
    formType: '',
    defaultFields: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      address: '',
      password: '',
      passwordConfirm: ''
    },
    cgFields: {
      cgFirstName: '',
      cgLastName: '',
      mFirstName: '',
      mLastName: '',
      phoneNumber: '',
      address: '',
      password: '',
      passwordConfirm: ''
    }
  }

  componentDidMount() {
    const form = this.props.match.params.form;
    this.setState({ formType: form })
  }

  defaultSubmit = event => {
    event.preventDefault();
    if(this.state.formType === 'mother') {
      console.log('start')
      this.props.add(this.state.defaultFields, true)
      .then(() => console.log('response received'))
    } else if(this.state.formType === 'driver') {
      console.log('start')
      this.props.add(this.state.defaultFields, true)
      .then(() => console.log('response received'))
    }
  }

  defaultHandleChange = event => {
    this.setState({
      defaultFields: {
        ...this.state.defaultFields,
        [event.target.name]: event.target.value
      }
    })
  }

  cgSubmit = event => {
    event.preventDefault();
    console.log('start')
      this.props.add(this.state.cgFields, false)
      .then(() => console.log('response received'))
  }

  cgHandleChange = event => {
    this.setState({
      cgFields: {
        ...this.state.cgFields,
        [event.target.name]: event.target.value
      }
    })
  }

  cgFields = [
    "Caregiver First Name",
    "Caregiver Last Name",
    "Mother First Name",
    "Mother Last Name",
    "Phone Number",
    "Address",
    "Enter Password",
    "Re-Enter Password"
  ]

  fields = [
    "First Name",
    "Last Name",
    "Phone Number",
    "Address",
    "Enter Password",
    "Re-Enter Password"
  ]

  render() {
    const { firstName, lastName, phoneNumber, address, password, passwordConfirm } = this.state.defaultFields;
    const { cgFirstName, cgLastName, mFirstName, mLastName, cgPhoneNumber, cgAddress, cgPassword, cgPasswordConfirm } = this.state.cgFields;

    return (
      <Container 
        gray
        style = {{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <h1>Sign up as a { this.state.formType.split('').map((a, i) => i === 0 ? a.toUpperCase() : a).join('') }:</h1>
        <Form 
          style = {{
            display: 'flex',
            flexDirection: 'column'
          }}
          onSubmit = { this.state.formType === 'caregiver' ? event => this.cgSubmit(event) : event => this.defaultSubmit(event) }
        >
          { this.state.formType == 'mother' || this.state.formType == 'driver' ? 
              this.fields.map((field, index) => (
                <Text 
                  placeholder = { field }
                  name = { 
                    index === 0 ? 'firstName' :
                    index === 1 ? 'lastName' :
                    index === 2 ? 'phoneNumber' :
                    index === 3 ? 'address' :
                    index === 4 ? 'password' :
                    'passwordConfirm' 
                  }
                  value = {
                    index === 0 ? firstName :
                    index === 1 ? lastName :
                    index === 2 ? phoneNumber :
                    index === 3 ? address :
                    index === 4 ? password :
                    passwordConfirm
                  }
                  onChange = { event => this.defaultHandleChange(event) }
                />
              ))
            :
              this.cgFields.map((field, index) => (
                <Text 
                  placeholder = { field }
                  name = {
                    index === 0 ? 'cgFirstName' :
                    index === 1 ? 'cgLastName' :
                    index === 2 ? 'mFirstName' :
                    index === 3 ? 'mLastName' :
                    index === 4 ? 'cgPhoneNumber' :
                    index === 5 ? 'cgAddress' :
                    index === 6 ? 'cgPassword' :
                    'cgPasswordConfirm'
                  }
                  value = {
                    index === 0 ? cgFirstName :
                    index === 1 ? cgLastName :
                    index === 2 ? mFirstName :
                    index === 3 ? mLastName :
                    index === 4 ? cgPhoneNumber :
                    index === 5 ? cgAddress :
                    index === 6 ? cgPassword :
                    cgPasswordConfirm
                  }
                  onChange = { event => this.cgHandleChange(event) }
                />
              ))
          }
        <Button submit/>
        </Form>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  // adding: state.loginReducer.loggingIn
})

export default connect(mapStateToProps, { add })(SignUp)