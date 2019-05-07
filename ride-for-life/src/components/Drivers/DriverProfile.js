import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Column, Previous, Button, Form, Text } from '../../simple-library';
import { MobileContainer, MobilePrevious } from '../../simple-library-mobile'

import { getReviews, get, update, addReview } from '../../actions';

class DriverProfile extends Component {
    state = {
        id: null,
        userId: null,
        editReview: false,
        prevReview: null,
        editText: '',
        newReview: '',
        addReviewOpen: false,
        addReview: ''
    }

    componentDidMount() {
        this.props.getReviews();
        const userId = localStorage.getItem('user');
        const id = this.props.match.params.id;
        this.props.get(id, 'driver');
        this.setState({ id: id, userId: Number(userId) })
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state.prevReview)
        const review = {
            ...this.state.prevReview,
            review: this.state.newReview
        }
        this.props.update(`reviews/${this.state.prevReview.id}`, review)
        .then(() => window.location.reload())
    }

    addReview = event => {
        event.preventDefault();
        const review = {
            userID: this.state.userId,
            driverID: this.state.id,
            review: this.state.addReview
        }
        this.props.addReview(review)
        .then(() => window.location.reload())
    }

    bioStyle = {
        border: '2px solid #707070',
        borderRadius: '5px',
        height: '30%',
        width: '80%',
        padding: '20px'
    }

    bioStyleMobile = {
        border: '2px solid #707070',
        borderRadius: '5px',
        height: '20%',
        width: '80%',
        padding: '20px',
        marginBottom: '20px'
    }

    bioHeader = {
        textAlign: 'center',
        fontSize: '20px',
        paddingBottom: '15px',
        fontWeight: '600'
    }
    
    driverNumbers = {
        backgroundColor: '#e89980',
        width: '80%',
        height: '70px',
        display: 'flex',
        padding: '10px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: '10px',
        margin: '10px auto',
        fontFamily: 'Source Sans Pro'
    }

    profileContainer = {
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'row'
    }

    profileContainerMobile = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }

    profileColumn = {
        width: '40%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around', 
        marginTop: '100px',
        alignItems: 'center'
    }

    driverStat = {
        textAlign: 'center',
        color: 'white',
        width: '30%',
    }

    driverPrice = {
        borderLeft: '2px solid #ffffff',
        borderRight: '2px solid #ffffff',
        textAlign: 'center',
        color: 'white',
        width: '30%',
        padding: '0 20px'
    }

    reviews = {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around'
    }

    input = {
        width: '30vw',
        height: '60px',
        margin: '10px 0',
    }

    render() { console.log(this.state)
        if(this.props.mobile) {
            return (
                <MobileContainer style={this.profileContainerMobile}>
                    <h2 style={{marginTop: '100px'}}> 
                        { this.props.user.firstName } { this.props.user.lastName }
                    </h2>
                    <h2 style={{fontSize: '35px', marginBottom: '40px'}}>
                        {this.props.user.city}, Uganda
                    </h2>
                    <div 
                        style = { this.bioStyleMobile }
                    >
                        <h4 style={this.bioHeader}>About {this.props.user.firstName}</h4>
                        <p>{this.props.user.bio}</p>                    
                    </div>
                    <div style={this.driverNumbers}>
                        <div style={this.driverStat}>
                            {this.props.user.trips} Trips
                        </div>
                        <div style={this.driverPrice}>
                            ${this.props.user.price} Price per Mile
                        </div>
                        <div style={this.driverStat}>
                            {this.props.user.averageRating} Average Rating
                        </div>
                    </div>
                    <div style={this.reviews}>
                    <h3 style={{fontSize: '30px', paddingBottom: '20px'}}>Reviews:</h3>
                        { this.props.reviews.map(review => (
                            review.driverID == this.state.id ?
                                (
                                    <MobilePrevious profile>
                                        <p> { review.rating } </p>
                                        <p> { review.review }</p>
                                    </MobilePrevious>
                                )
                            :
                                console.log(review)
                        ))}
                    </div>
                </MobileContainer>
            )
        } 
        else return (
            <Container 
                style = { this.profileContainer }
                { ...this.props }
            >
                <Column 
                    style = { this.profileColumn } 
                >
                    {/* <img src='${props.driver.photos.photo1}' /> */}
                    <h2> 
                        { this.props.user.firstName } { this.props.user.lastName }
                    </h2>
                    <h2 style={{fontSize: '35px'}}>
                        {this.props.user.city}, Uganda
                    </h2>
                    <div 
                        style = { this.bioStyle }
                    >
                        <h4 style={this.bioHeader}>About {this.props.user.firstName}</h4>
                        <p>{this.props.user.bio}</p>                    
                    </div>
                </Column>
                <Column style={this.profileColumn}>
                    <div style={this.driverNumbers}>
                        <div style={this.driverStat}>
                            {this.props.user.trips} Trips
                        </div>
                        <div style={this.driverPrice}>
                            ${this.props.user.price} Price per Mile
                        </div>
                        <div style={this.driverStat}>
                            {this.props.user.averageRating} Average Rating
                        </div>
                    </div>
                    <div style={this.reviews}>
                    { this.state.addReviewOpen ? 
                        <Form 
                            style = {{
                                display: 'flex', 
                                justifyContent: 'space-between', 
                                width: '100%'
                            }}
                            onSubmit = { event => this.addReview(event) }
                        >
                            <Text 
                                placeholder = "Add Review"
                                name="addReview"
                                value = { this.state.addReview }
                                onChange = { event => this.handleChange(event) }
                                style = {{width: '70%', padding: '0 10px'}}
                            />
                            <Button submit>Submit</Button>
                        </Form>
                    :
                        <div style = {{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                            <h3 
                                style={{fontSize: '30px', padding: '20px 0'}}
                            >
                                Reviews:
                            </h3>
                            <Button onClick = { () => this.setState({ addReviewOpen: true }) }>Add Review</Button>
                        </div>
                    }
                    { this.state.editReview ? 
                        this.props.reviews.map(review => (
                            review.driverID == this.state.id ?
                                review.review == this.state.editText ?
                                <Previous profile>
                                    <Form 
                                        style = {{
                                            display: 'flex', 
                                            justifyContent: 'space-between', 
                                            width: '100%', 
                                            alignItems: 'center'
                                        }}
                                        onSubmit = { event => this.handleSubmit(event) }
                                    >
                                        <div></div>
                                        <Text 
                                            placeholder = { review.review }
                                            name="newReview"
                                            value = { this.state.newReview }
                                            onChange = { event => this.handleChange(event) }
                                        />
                                        <Button submit>Submit</Button>
                                    </Form>
                                </Previous>
                                :
                                <Previous profile>
                                    <div style = {{display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center'}}>
                                        <div></div>
                                        <p>{ review.review }</p>
                                        <Button style = {{visibility: 'hidden'}} />
                                    </div>
                                </Previous>
                            :
                                <div></div>
                        ))
                    :
                        <>
                            { this.props.reviews.map(review => (
                                review.driverID == this.state.id ?
                                    (
                                        <Previous profile>
                                            <p> { review.rating } </p>
                                            <p> { review.review }</p>
                                            { review.userID === this.state.userId ?
                                                <Button 
                                                    style = {{
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center'
                                                    }}
                                                    onClick = { () => this.setState({ editReview: true, editText: review.review, prevReview: review }) }
                                                >
                                                    Edit
                                                </Button>
                                            :
                                                <Button style = {{visibility: 'hidden'}} />
                                            }
                                        </Previous>
                                    )
                                :
                                    null
                            ))}
                        </>
                    }
                    </div>
                </Column>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    const { user, fetchingUser, error } = state.getReducer
    const { reviews } = state.reviewsReducer
    return {
      user,
      reviews,
      fetchingUser,
      error
    }
  }
  
  export default connect(mapStateToProps, { getReviews, get, update, addReview })(DriverProfile)