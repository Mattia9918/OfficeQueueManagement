import {useState} from 'react';
import {Form, Button, Container} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Ticket(props) {

    const [serviceId, setServiceId] = useState();
    const navigate = useNavigate(); 

    const submitHandler = (event) => {
    event.preventDefault();

    props.takeTicket(serviceId); 
    navigate("/queue"); 
    }

    return (
        <Form onSubmit={submitHandler}>
        <Container className="shadow-sm p-2" id = "body">
          <Container id = "logo">
            <i id = "title">OQM</i>
          </Container>
            <Form.Label id = "label">Select the service type you want to receive:</Form.Label>
            <Form.Select id = "servicetype" onChange = {(event) => setServiceId(event.target.value)} required = {true}>
              <option>Select a service</option>
              {props.services != undefined && props.services.map((service) =>
                <option value = {service.id}>{service.name}</option>
              )};
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