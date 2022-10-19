import { useState } from 'react';
import { Form, Button, Container, Row } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';


function ServiceType(props) {

    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [estimatedTime, setEstimatedTime] = useState('');

    const submitHandler = (event) => {

        const info = { name, estimatedTime };
        event.preventDefault();
        props.postServiceType(info);
        navigate("/serviceType");
    }


    return (
        <Container id="bodyServiceType">
            <Form onSubmit={submitHandler}>
                <Row >

                    <h3>Insert New Service Type</h3>


                    <Form.Group className="mt-4">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder='Insert Service Type Name' value={name} onChange={ev => setName(ev.target.value)}></Form.Control>

                    </Form.Group>
                    <Form.Group className='mt-4'>
                        <Form.Label>Estimated Time</Form.Label>
                        <Form.Control type="text" placeholder='Insert Estimated Time' value={estimatedTime} onChange={ev => setEstimatedTime(ev.target.value)}></Form.Control>

                    </Form.Group>

                </Row>
                <Button variant='primary' className="mt-4" type="submit">Submit</Button>
            </Form>
        </Container>
    )

}

export default ServiceType