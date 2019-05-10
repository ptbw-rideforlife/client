import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { update } from '../../actions';
import { Container, Column, Button, Form, Text } from '../../simple-library';
import { MobileContainer, MobileButton, MobileForm } from '../../simple-library-mobile';

class User extends Component {
  state = {
    edit: false,
    newProfile: {
      newFirstName: '',
      newLastName: '',
      newAddress: '',
      newPhoneNumber: '',
      newPassword: ''
    }
  }

  userContainer = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  }

  userColumn = {
    alignItems: 'center',
    width: '40vw'
  }

  userColumnMobile = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100vh'
  }

  button = {
    width: '300px',
    height: '60px',
    fontSize: '16px'
  }

  input = {
    width: '30vw',
    height: '60px',
    margin: '10px 0'
  }

  mobileInput = {
    width: '70vw',
    height: '60px',
    margin: '10px 0'
  }

  logout() {
    localStorage.clear();
    window.location.href='/';
  }

  edit = () => {
    this.setState({ edit: true})
  }

  handleChange = event => {
    this.setState({
      newProfile: {
        ...this.state.newProfile,
        [event.target.name]: event.target.value
      }
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    const { newFirstName, newLastName, newAddress, newPhoneNumber, newPassword } = this.state.newProfile
    const { firstName, lastName, address, phoneNumber, password } = this.props.user

    const profile = {
      firstName: newFirstName === '' ? firstName : newFirstName,
      lastName: newLastName === '' ? lastName : newLastName,
      address: newAddress === '' ? address : newAddress,
      phoneNumber: newPhoneNumber === '' ? phoneNumber : newPhoneNumber,
      password: newPassword === '' ? password : newPassword
    }

    const id = this.props.match.params.id;

    this.props.update(`users/${id}`, profile)
    .then(() => window.location.reload())
  }

  render() {
    const {
      newFirstName,
      newLastName,
      newAddress,
      newPhoneNumber,
      newPassword
    } = this.state.newProfile

    const {
      firstName,
      lastName,
      address,
      phoneNumber,
    } = this.props.user

    const fields = [
      firstName,
      lastName,
      address,
      phoneNumber,
      "New Password"
    ]

    if(this.props.mobile) {
      return (
        <>
          { this.state.edit ? 
            <MobileContainer
              blue
              style = {{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <MobileForm
                style = {{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
                onSubmit = { event => this.handleSubmit(event) }
              >
                { fields.map((field, index) => (
                  <>
                    <Text 
                      placeholder = { field }
                      style = { this.mobileInput }
                      name = {
                        index === 0 ? 'newFirstName' :
                        index === 1 ? 'newLastName' :
                        index === 2 ? 'newAddress' :
                        index === 3 ? 'newPhoneNumber' :
                        'newPassword'
                      }
                      value = {
                        index === 0 ? newFirstName :
                        index === 1 ? newLastName :
                        index === 2 ? newAddress :
                        index === 3 ? newPhoneNumber :
                        newPassword
                      }
                      onChange = { event => this.handleChange(event) }
                    />
                  </>
                )) }
                <MobileButton submit />
              </MobileForm>
            </MobileContainer>
          :
            <MobileContainer
              blue
              { ...this.props }
            >
              <div style={this.userColumnMobile}>
                <h2 style={{color: 'white', paddingBottom: '20px'}}>Hi, { this.props.user.firstName } !</h2>
                <Link to='/map'>
                  <Button default style={this.button}> Request a Ride </Button>
                </Link>
                <Link to='/drivers'><Button default style={this.button}>Browse Drivers</Button></Link>
                <Button 
                  default 
                  style={this.button}
                  onClick = { () => this.edit() }
                >
                  Edit Profile
                </Button>
                <Link to='/users/:id/previous'><Button default style={this.button}>Previous Trips</Button></Link>
                <Button logout onClick={() => this.logout()} />
              </div>
            </MobileContainer>
          }
        </>
      )
    } else return (
      <>
        { this.state.edit ? 
          <Container
            blue
            style = {{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}
            { ...this.props }
          >
            <Form
              style = {{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
              }}
              onSubmit = { event => this.handleSubmit(event) }
            >
              { fields.map((field, index) => (
                <>
                  <Text 
                    placeholder = { field }
                    style = { this.input }
                    name = {
                      index === 0 ? 'newFirstName' :
                      index === 1 ? 'newLastName' :
                      index === 2 ? 'newAddress' :
                      index === 3 ? 'newPhoneNumber' :
                      'newPassword'
                    }
                    value = {
                      index === 0 ? newFirstName :
                      index === 1 ? newLastName :
                      index === 2 ? newAddress :
                      index === 3 ? newPhoneNumber :
                      newPassword
                    }
                    onChange = { event => this.handleChange(event) }
                  />
                </>
              )) }
              <Button submit />
            </Form>
          </Container>
        :
          <Container
            { ...this.props }
            blue 
            style={this.userContainer}
          >
            <Column style={this.userColumn}>
              <h2 style = {{ color: 'white' }}>Hi, { this.props.user.firstName } !</h2>
            </Column>
            <Column style={this.userColumn}>
                <Link to='/map'>
                  <Button default style={this.button}> Request a Ride </Button>
                </Link>
                <Link to='/drivers'><Button default style={this.button}>Browse Drivers</Button></Link>
                <Button 
                  default 
                  style={this.button}
                  onClick = { () => this.edit() }
                >
                  Edit Profile
                </Button>
                <Link to='/users/:id/previous'><Button default style={this.button}>Previous Trips</Button></Link>
                <Button logout onClick={() => this.logout()}/>
            </Column>
          </Container>
        }
      </>
    )
  }
}

const mapStateToProps = state => ({
  id: state.updateReducer.id
})

export default connect (mapStateToProps, { update })(User)