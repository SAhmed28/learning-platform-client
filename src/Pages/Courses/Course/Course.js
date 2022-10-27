import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom'


const Course = ({ course }) => {

    console.log(course)
    const {_id, title, description, image, rating } = course;
    return (

        <Col>
            <Card>
                <Card.Img style={{height:'200px'}} variant="top" src={image} />
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
            </Card>
        </Col>
    );
};

export default Course;