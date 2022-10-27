import React from 'react';
import {useLoaderData, useLocation} from 'react-router-dom'

const Checkout = () => {
    const courseData = useLoaderData();
    const {title} = courseData;
    console.log('courseData', courseData)
    
    return (
        <div className='my-5'>
            <h2>You have selected this course for checkout: <span className='text-primary'>{title}</span></h2>
        </div>
    );
};

export default Checkout;