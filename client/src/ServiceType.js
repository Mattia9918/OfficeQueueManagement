import { useState } from 'react';
import { Form, Button, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function ServiceType(props) {

    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [estimatedTime, setEstimatedTime] = useState('');

    const submitHandler = (event) => {

        const info = { name, estimatedTime };

        event.preventDefault();
        props.setNewServiceType(info.name);
        props.postServiceType(info);
        navigate("/");
    }


    return (
        <Container className="shadow-sm p-2" id="bodyServiceType">
            <Form onSubmit={submitHandler}>
                <Row >

                    <center>
                    <h3>Insert new service type</h3>
                    </center>

                    <Form.Group  className="mt-2">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder='Insert service type name' value={name} onChange={ev => setName(ev.target.value)}></Form.Control>

                    </Form.Group>
                    <Form.Group  className='mt-4'>
                        <Form.Label>Estimated time</Form.Label>
                        <Form.Control type="text" placeholder='Insert estimated time' value={estimatedTime} onChange={ev => setEstimatedTime(ev.target.value)}></Form.Control>

                    </Form.Group>

                </Row>
                <center>
                <Button variant='secondary' className="mt-4 me-3" size = "lg" onClick = {() => navigate('/')}>Back</Button>
                <Button variant='primary' className="mt-4 ms-3" type="submit" size = "lg">Submit</Button>
                </center>
            </Form>
        </Container>
    )

}

export default ServiceType