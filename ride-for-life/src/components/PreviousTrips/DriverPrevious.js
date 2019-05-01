import React from 'react';
import { Previous, Button } from '../../simple-library';

const DriverPrevious = props => {
    return (
        <Container>
            {props.driver.previous.map(previous => {
                return (
                    <Previous>
                        {props.driver.previous}
                        {props.driver.previous.reviewCompleted ? <Button>See Review</Button> : null }
                    </Previous>
                )
            })}
        </Container>
    )
}

export default DriverPrevious