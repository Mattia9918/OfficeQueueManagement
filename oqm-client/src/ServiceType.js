import { Form, Button, Container, Row } from 'react-bootstrap';


function ServiceType(props) {



    return (
        <Container id="bodyServiceType">
            <Form>
                <Row >

                    <h3>Insert New Service Type</h3>


                    <Form.Group className="mt-4">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder='Insert Service Type Name'></Form.Control>

                    </Form.Group>
                    <Form.Group className='mt-4'>
                        <Form.Label>Estimated Time</Form.Label>
                        <Form.Control type="text" placeholder='Insert Estimated Time'></Form.Control>

                    </Form.Group>






                </Row>
                <Button variant='primary' className="mt-4">Submit</Button>
            </Form>
        </Container>
    )

}

export default ServiceType