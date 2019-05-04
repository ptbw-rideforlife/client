export default drivers [
    {
        firstName: '',
        lastName: '',
        phoneNumber: 1234567890,
        bio: '',
        rides: 145,
        price: 63.23,
        cityCountry: '',
        averageRating: 2.45,  //1-5 possible
        id: 12,
        previous: [
            {
                firstName: '', //of mother or caregiver
                lastName: '', //of mother or caregiver
                reviewCompleted: true,
                rating: 4, //only whole numbers 
                review: '',
                cost: '',
                id: ''
            }   
        ]
        // photos: [ //this is for stretch
        //     {
        //         photo1: '',
        //         photo2: '',
        //         photo3: '',
        //         photo4: '' //max at 4 photos?
        //     }
        // ] 
    }
]

export default user [
    {
        firstName: '',
        lastName: '',
        caregiverFirstName: '',
        caregiverLastName: '',
        phoneNumber: 1234567890,
        cityCountry: '',
        id: 34,
        previous: [
            {
                firstName: '',
                lastName: '',
                reviewCompleted: true,
                rating: 3, //only whole numbers
                review: '',
                cost: '',
                id: ''
            }
        ]

    }
]