import React from 'react';
import { Previous, Button } from '../../simple-library';

const MCPrevious = props => {
    return (
        <Container>
            {props.user.previous.map(previous => {
                return (
                    <Previous>
                        {props.user.previous}
                        {props.user.previous.reviewCompleted ? <Button>Edit Review</Button> : <Button>Start Review</Button> }
                    </Previous>
                )
            })}
        </Container>
    )
}

export default MCPrevious