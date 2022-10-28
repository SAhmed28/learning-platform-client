import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const LeftSideNav = () => {
    const [courses, setCourses] = useState([]);
    const {theme} = useContext(AuthContext);

    useEffect(()=>{
        fetch('http://localhost:5000/courses')
        .then(res=>res.json())
        .then(data => setCourses(data));
    },[])

    console.log('courses', courses);

    return (
        <div className= {theme}>
            <h3 className='py-3'>List of Courses</h3>
            {
               courses.map(singleCourse => <p key={singleCourse._id}><Link to={`/courses/${singleCourse._id}`}>{singleCourse.title}</Link></p>)
            }
        </div>
    );
};

export default LeftSideNav;