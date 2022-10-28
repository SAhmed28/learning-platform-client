import React, { useRef } from 'react';
import { useLoaderData, Link } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FaCloudDownloadAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
// import {useReactToPrint} from 'react-to-print'
import Pdf from "react-to-pdf";

const CourseDetails = () => {
    const singleCourseDetails = useLoaderData();
    const { _id, title, description, image, rating } = singleCourseDetails;
    const navigate = useNavigate();

    const ref = React.createRef();

    // const componentRef = useRef();
    // const handlePdfDownload = useReactToPrint({
    //     content: () => componentRef.current,
    //     documentTitle: 'course-details',
    //     onAfterPrint: () => alert('Print success')
    // });

    if (singleCourseDetails === '') {
        navigate('/error');
    }

    const handleCheckout = () => {
        navigate(`/checkout/${_id}`);
    }

    return (
        <div>
            <div className='d-flex my-3'>
                <h2>Course Details: </h2>
                <Pdf targetRef={ref} filename="code-example.pdf">
                    {({ toPdf }) => <button onClick={toPdf} className='btn btn-primary mx-4'><FaCloudDownloadAlt /> Download PDF</button>}
                </Pdf>
                {/* <button className='btn btn-primary mx-4'> <FaCloudDownloadAlt /> Download PDF</button> */}
            </div>

            <Row xs={1} md={1} className="g-4 mb-4">
                <Col>
                    <Card>
                        <Card.Img style={{ height: '350px' }} variant="top" src={image} />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text ref={ref}>
                                {description}
                            </Card.Text>
                            <Link to={`/courses`}>
                                <Button variant="primary">Go Back to Courses</Button>
                            </Link>
                            <Link to={`/checkout/${_id}`}>
                                <Button onClick={'handleCheckout'} className='mx-2' variant="success">Get Premium access</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default CourseDetails;