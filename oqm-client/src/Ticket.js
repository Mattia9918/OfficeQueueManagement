import {useState} from 'react';
import {Form, Button, Container} from 'react-bootstrap';

function Ticket(props) {

    const [service, setService] = useState();

    const submitHandler = (event) => {
    event.preventDefault();

    props.takeTicket(service.id);
    }

    return (
        <Form onSubmit={submitHandler}>
        <Container className="shadow-sm p-2" id = "body">
          <Container id = "logo">
            <i id = "title">OQM</i>
          </Container>
            <Form.Label id = "label">Select the service type you want to receive:</Form.Label>
            <Form.Select id = "servicetype" onChange = {(event) => setService(event.target.value)} required = {true}>
              <option disabled = {true}>Select a service</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>

          <center>
          <Button align = "center" variant="primary" size="lg" type="submit">
                Take the ticket
          </Button>
          </center>
        </Container>
    </Form>
    );
    

}

export default Ticket