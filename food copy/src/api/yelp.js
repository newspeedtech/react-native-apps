import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 8JGNqOhq-RLtFH6myAJAb4JD0M-Kek5rWuOAFM330xCsBFB85gKgJ0llBL93bBKo385Z7UueKL6rH55lB3-XBbE25_cBDFho5AFdxne9agpu4LiMpYZ2B_qNlC5fXnYx'
    }


})
