import React from 'react';
import { useLoaderData, Link } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const CourseDetails = () => {
    const singleCourseDetails = useLoaderData();
    const { _id, title, description, image, rating } = singleCourseDetails;
    return (
        <div>
            <h2>Course Details:</h2>

            <Row xs={1} md={1} className="g-4">
                <Col>
                    <Card>
                        <Card.Img style={{ height: '350px' }} variant="top" src={image} />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>
                                {description}
                            </Card.Text>
                            <Link to={`/courses`}>
                                <Button variant="primary">Go Back to Courses</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default CourseDetails;