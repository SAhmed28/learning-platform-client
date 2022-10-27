import React from 'react';
import { useLoaderData } from 'react-router-dom'
import Course from '../Course/Course';
import Row from 'react-bootstrap/Row';

const Courses = () => {
    const courses = useLoaderData();

    return (
        <div className='my-3'>
            <h2 className='py-3'>We have {courses.length} courses for you!</h2>
            <Row xs={1} md={2} className="g-4">
                {
                    courses.map(course => <Course key={course._id} course={course}></Course>)
                }

            </Row>

        </div>
    );
};

export default Courses;