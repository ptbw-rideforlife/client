import React, { Component } from 'react';
import { connect } from 'react-redux';

import { update } from '../../actions';
import { Container, Column, Button, Form, Text } from '../../simple-library';
import { MobileContainer, MobileButton, MobileForm } from '../../simple-library-mobile'
import { Link } from 'react-router-dom'

class Driver extends Component {
  state = {
    edit: false,
    newProfile: { 
      newFirstName: '', 
      newLastName: '', 
      newPhoneNumber: '', 
      newPrice: '', 
      newCity: '', 
      newPassword: '' 
    }
  }

  userContainer = {
    display: 'flex',
    width: '100%',
    height: '100vh',
    justifyContent: 'space-around',
    alignItems: 'center'
  }

  userContainerMobile = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center'
  }

  userColumn = {
    alignItems: 'center',
    width: '40vw'
  }

  button = {
    width: '300px',
    height: '60px',
    fontSize: '16px'
  }

  logout = () => {
    localStorage.clear();
    this.props.history.push('/')
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
    const { newFirstName, newLastName, newPhoneNumber, newPrice, newCity, newPassword } = this.state.newProfile
    const { firstName, lastName, phoneNumber, price, city, password } = this.props.user

    const profile = {
      firstName: newFirstName === '' ? firstName : newFirstName,
      lastName: newLastName === '' ? lastName : newLastName,
      phoneNumber: newPhoneNumber === '' ? phoneNumber : newPhoneNumber,
      price: newPrice === '' ? price : newPrice,
      city: newCity === '' ? city : newCity,
      password: newPassword === '' ? password : newPassword
    }

    const id = this.props.match.params.id;

    this.props.update(`driver/${id}`, profile)
    .then(() => window.location.reload())
  }

    render() {
      const { 
        newFirstName, 
        newLastName, 
        newPhoneNumber, 
        newPrice, 
        newCity, 
        newPassword 
      } = this.state.newProfile
  
      const { 
        firstName, 
        lastName, 
        phoneNumber, 
        price, 
        city
      } = this.props.user
  
      const fields = [
        firstName, 
        lastName, 
        phoneNumber, 
        price, 
        city, 
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
                        name = {
                          index === 0 ? 'newFirstName' :
                          index === 1 ? 'newLastName' :
                          index === 2 ? 'newPhoneNumber' :
                          index === 3 ? 'newPrice' :
                          index === 4 ? 'newCity' :
                          'newPassword'
                        }
                        value = {
                          index === 0 ? newFirstName :
                          index === 1 ? newLastName :
                          index === 2 ? newPhoneNumber :
                          index === 3 ? newPrice :
                          index === 4 ? newCity :
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
                style={this.userContainerMobile}
                { ...this.props }
              >
                <h2 style={{color: 'white', paddingBottom: '20px'}}>
                  Hi, {this.props.driver.firstName}!
                </h2>
                <Link to = { `/drivers/${this.props.match.params.id}` }>
                  <Button default style={this.button}>
                    View Profile
                  </Button>
                </Link>
                <Button 
                  default 
                  style={this.button}
                  onClick = { () => this.edit() }
                >
                  Edit Profile
                </Button>
                <Link>
                  <Button default style={this.button}>
                    Previous Trips
                  </Button>
                </Link>
                <Button logout onClick={() => this.logout()} />
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
                      name = {
                        index === 0 ? 'newFirstName' :
                        index === 1 ? 'newLastName' :
                        index === 2 ? 'newPhoneNumber' :
                        index === 3 ? 'newPrice' :
                        index === 4 ? 'newCity' :
                        'newPassword'
                      }
                      value = {
                        index === 0 ? newFirstName :
                        index === 1 ? newLastName :
                        index === 2 ? newPhoneNumber :
                        index === 3 ? newPrice :
                        index === 4 ? newCity :
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
              blue
              style={this.userContainer}
              { ...this.props }
            >
              <Column style={this.userColumn}>
                {/* <img src='{driver.photo1}' /> */}
                <h2 style={{color: 'white'}}>
                    Hi, {this.props.driver.firstName}!
                </h2>
              </Column>
              <Column style={this.userColumn}>
              <Link to = { `/drivers/${this.props.match.params.id}` }>
                <Button default style={this.button}>
                  View Profile
                </Button>
              </Link>
              <Button 
                default 
                style={this.button}
                onClick = { () => this.edit() }
              >
                Edit Profile
              </Button>
              <Button 
                default
                style={this.button}
                onClick = { () => this.getReviews() }
              >
                Previous Trips
              </Button>
              <Button logout onClick={() => this.logout()} />
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

export default connect (mapStateToProps, { update })(Driver)
