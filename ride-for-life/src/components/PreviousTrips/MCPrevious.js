import React from 'react';
import { Previous, Button } from '../../simple-library';

const MCPrevious = props => {
    reviewButton = {
        height: '35px',
        marginRight: '20px',
        alignSelf: 'center'
    }

    return (
        <Container>
            {props.user.previous.map(previous => {
                return (
                    <Previous>
                        <div style={previousText}>
                            <p>{props.user.previous.firstName} {props.user.previous.lastName}</p>
                            <p>{props.user.previous.date}</p>
                            {props.user.previous.reviewCompleted ? <p>Rating: {props.user.previous.rating}</p> : <p>Review Not Started</p>}
                            <p>Cost: {props.user.previous.cost}</p>
                        </div>
                        <Button style={reviewButton}>{props.user.previous.reviewCompleted ? 'Edit Review' : 'Begin Review'}</Button>
                    </Previous>
                )
            })}
        </Container>
    )
}

export default MCPrevious