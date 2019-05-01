import React from 'react';
import { Previous, Button, Container } from '../../simple-library';

const DriverPrevious = props => {
    previousText = {
        paddingLeft: '20px'
    }

    reviewButton = {
        height: '35px',
        marginRight: '20px',
        alignSelf: 'center'
    }

    return (
        <Container>
            {props.driver.previous.map(previous => {
                return (
                    <Previous>
                        <div style={previousText}>
                            <p>{props.driver.previous.firstName} {props.driver.previous.lastName}</p>
                            <p>{props.driver.previous.date}</p>
                            {props.driver.previous.reviewCompleted ? <p>Rating: {props.driver.previous.rating}</p> : <p>Review Pending</p>}
                            <p>Price: {props.driver.previous.price}</p>
                        </div>
                        {props.driver.previous.reviewCompleted ? <Button style={reviewButton}>See Review</Button> : null }
                    </Previous>
                )
            })}
        </Container>
    )
}

export default DriverPrevious