import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom'
import { FaStar } from "react-icons/fa";


const Course = ({ course }) => {

    console.log(course)
    const { _id, title, description, image, rating, company } = course;
    return (
        <Col>
            <Card>
                <Card.Img style={{ height: '200px' }} variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {
                            description.length > 250 ?
                                <>{description.slice(0, 100) + '...'} <Link to={`/courses/${_id}`}>Read More</Link></>
                                :
                                description
                        }
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='d-flex justify-content-between'>
                    <div d-flex align-items-center>
                        <FaStar className='text-warning me-2'></FaStar>
                        <span>{rating}</span>
                    </div>
                    <div d-flex align-items-center>
                        <span>From: <b>{company}</b></span>
                    </div>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Course;