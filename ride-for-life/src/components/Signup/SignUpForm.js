import React, { Component } from 'react';
import { connect } from 'react-redux';

import { add } from '../../actions';
import { Container, Form, Column, Button, Text } from '../../simple-library';
import { MobileContainer, MobileForm, MobileButton } from '../../simple-library-mobile'

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
    console.log(this.state)
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

  header = {
    paddingRight: '400px'
  }

  input = {
    width: '300px',
    height: '50px',
    margin: '10px 0',
    fontSize: '14px',
    paddingLeft: '10px'
  }

  formMobile = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }

  signUpHeader = {
    padding: '70px 0',
    textAlign: 'center',
    width: '100%'
  }

  signUpContainer = {
    height: '1200px'
  }

  render() {
    const { firstName, lastName, phoneNumber, address, password, passwordConfirm } = this.state.defaultFields;
    const { cgFirstName, cgLastName, mFirstName, mLastName, cgPhoneNumber, cgAddress, cgPassword, cgPasswordConfirm } = this.state.cgFields;
    if(this.props.mobile) {
      return (
        <MobileContainer style={this.signUpContainer}>
            <h2 style={this.signUpHeader}>Sign Up as a { this.state.formType.split('').map((a, i) => i === 0 ? a.toUpperCase() : a).join('') }</h2>
            <MobileForm
              style = { this.formMobile }
              onSubmit = { this.state.formType === 'caregiver' ? event => this.cgSubmit(event) : event => this.defaultSubmit(event) } >
                { this.state.formType == 'mother' || this.state.formType == 'driver' ? 
              this.fields.map((field, index) => (
                <Text 
                  placeholder = { field }
                  style = { this.input }
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
                  style = { this.input }
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
                <MobileButton submit/>
            </MobileForm>
        </MobileContainer>
      )
    }
    else return (
      <Container 
        gray
        style = {{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <h2 style={ this.header }>Sign up as a { this.state.formType.split('').map((a, i) => i === 0 ? a.toUpperCase() : a).join('') }</h2>
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
                  style = { this.input }
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
                  style = { this.input }
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