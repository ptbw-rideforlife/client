import React from 'react';
import { Container, Column, Previous } from '../../simple-library';

const DriverProfile = props => { //pass in driver info
    const bioStyle = {
        border: '2px solid #707070',
        borderRadius: '5px'
    }
    
    const driverNumbers = {
        backgroundColor: '#e89980',
        width: '100%',
        height: props.height,
        display: 'flex'
    }

    const driverPrice = {
        borderLeft: '1px solid #707070',
        borderRight: '1px solid #707070'
    }

    return (
        <Container>
            <Column>
                {/* <img src='${props.driver.photos.photo1}' /> */} // stretch
                <h2>{props.driver.firstName} {props.driver.lastName}</h2>
                <h2>{props.driver.address}</h2>
                <div style={bioStyle}>
                    <h4>About {props.driver.firstName}</h4>
                    <p>{props.driver.bio}</p>                    
                </div>
            </Column>
            <Column>
                <div style={driverNumbers}>
                    <div>${props.driver.trips} Trips</div>
                    <div style={driverPrice}>${props.driver.price} Price per Mile</div>
                    <div>${props.driver.averageRating} Average Rating</div>
                </div>
                <h3>Reviews:</h3>
                {/* {props.driver.previous.map()}  */} 
                    <Previous>
                        <p>{props.driver.previous.rating}</p>
                        {/* if statement for null review here */}
                        <p>{props.driver.previous.review}</p> 
                        <p>{props.driver.previous.firstName}</p>
                    </Previous>
            </Column>
        </Container>
    )
}

export const DriverProfile;