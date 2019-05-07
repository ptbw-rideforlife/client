import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Container } from '../../simple-library';
import DriverCard from './DriverCard';
import { getDrivers } from '../../actions';
import { MobileContainer } from '../../simple-library-mobile'

class Drivers extends Component {
  componentDidMount() {
    this.props.getDrivers();
  }

  goTo = id => {
    this.props.history.push(`/drivers/${id}`)
  }

  render() {
    if (this.props.mobile) {
      return (
        <MobileContainer style = {{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: '100px', 
        }}>
          <h2 style={{
            textAlign: 'center'
          }}>Browse All Drivers:</h2>
          <div style = {{
          display: 'flex',
          flexDirection: 'column',
          paddingTop: '40px',
          height: '70vh',
          width: '100%',
          alignItems: 'center'
        }}>
        { this.props.drivers.map(driver => (
          <DriverCard 
            driver = { driver }
            goTo = { this.goTo }
          />
        )) }
        </div>
        </MobileContainer>
      )
    } else
    return (
      <Container style = {{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '100px', 
      }}>
        <h2>Browse All Drivers:</h2>
        <div style = {{
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
          paddingTop: '40px',
          height: '70vh',
          width: '100%',
          alignItems: 'center'
        }}>
        { this.props.drivers.map(driver => (
          <DriverCard 
            driver = { driver }
            goTo = { this.goTo }
          />
        )) }
        </div>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  const { drivers, fetchingDrivers, error } = state.driversReducer
  return {
    drivers,
    fetchingDrivers,
    error
  }
}

export default connect(mapStateToProps, { getDrivers })(Drivers)
