import {Navbar, Container, Col, Nav, Form, Row, Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Navigation(props) {

    const navigate = useNavigate();
    
    const loginHandler = (event) => {
        event.preventDefault();

        navigate('/serviceType');
    
    }

    return (
        <>

            {/* -- NAVBAR -- */}

            <Navbar bg="light" expand="lg">
                <Container fluid className="shadow-sm p-2" id="topbar">

                    <Col className="col-3">
                        {/* Logo and brand */}
                        <Container>
                        <Navbar.Brand>
                            <i id = "title" style = {{'margin-left': '20px'}}>OQM</i>
                        </Navbar.Brand>
                        </Container>
                    </Col>

                    {/* Aria controls */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    {/* Dropdowns and links */}
                   <Container>
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="ms-auto">
                            <Container>
                                <Form onSubmit={loginHandler}>
                                    <Row>
                                    <Col align = "center">
                                    <Form.Group className="mb-3" controlId="username">
                                        <Form.Control  size = "sm" type="text" placeholder="Username" required = {true}/>
                                    </Form.Group>
                                    </Col>
                                    <Col align = "center">
                                    <Form.Group  className="mb-3" controlId="password">
                                        <Form.Control  size = "sm" type="password" placeholder="Password" required = {true}/>
                                    </Form.Group>
                                    </Col>
                                    <Col xs = {2} align = "center">
                                    <Button  variant="primary" size="sm" type="submit">
                                            Login
                                    </Button>
                                    </Col>
                                    </Row>
                                </Form>
                        </Container>
                        </Nav>
                    </Navbar.Collapse>
                    </Container> 
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;