import React from 'react';
import { Container, Column, Previous } from '../../simple-library';

const DriverProfile = props => { //pass in driver info
    const bioStyle = {
        border: '2px solid #707070',
        borderRadius: '5px'
    }
    
    const driverNumbers = {
        backgroundColor: '#e89980',
        width: '80%',
        height: props.height,
        display: 'flex',
        padding: '10px',
        display: 'flex',
        justifyContent: 'space-around',
        borderRadius: '10px',
        margin: '0 auto'
    }

    const driverPrice = {
        borderLeft: '1px solid #707070',
        borderRight: '1px solid #707070'
    }

    const profileContainer = {
        display: 'flex',
        justifyContent: 'space-around'
    }

    const profileColumn = {
        width: '45%',
        justifyContent: 'space-around'
    }

    const firstColumn = {
        position: 'absolute'
    }

    const driverStat = {
        textAlign: 'center',
        color: 'white',
        width: '30%'
    }

    const driverPrice = {
        borderLeft: '2px solid #707070',
        borderRight: '2px solid #707070',
        textAlign: 'center',
        color: 'white',
        width: '30%',
        padding: '0 20px'
    }

    return (
        <Container style={profileContainer}>
            <Column style={profileColumn} style={firstColumn}>
                {/* <img src='${props.driver.photos.photo1}' /> */}
                <h2>{props.driver.firstName} {props.driver.lastName}</h2>
                <h2>{props.driver.address}</h2>
                <div style={bioStyle}>
                    <h4>About {props.driver.firstName}</h4>
                    <p>{props.driver.bio}</p>                    
                </div>
            </Column>
            <Column>
                <div style={driverNumbers}>
                    <div style={driverStat}>${props.driver.trips} Trips</div>
                    <div style={driverPrice}>${props.driver.price} Price per Mile</div>
                    <div style={driverStat}>${props.driver.averageRating} Average Rating</div>
                </div>
                <h3>Reviews:</h3>
                {props.driver.previous.map(previous => {
                    return (
                        <Previous profile>
                            <p>Rating: {props.driver.previous.rating}</p>
                            <p>{props.driver.previous.reviewCompleted ? props.driver.previous.review : null}</p>
                            <p>{props.driver.previous.firstName}</p>
                        </Previous>
                    )
                })}
            </Column>
        </Container>
    )
}

export const DriverProfile;