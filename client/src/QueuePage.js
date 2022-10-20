
/* 
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
*/

import {Container,Button} from 'react-bootstrap';
import API from "./API";
import Table from 'react-bootstrap/Table';
import   {useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';


function TableItem(props) {

  
  const navigate = useNavigate();
    
return (
  <Container className="shadow-sm p-2" id = "bodytable" >
    <Table className = "mt-4">
      <thead>
        <tr>
          <th>Codice Ticket</th>
          <th>Utenti in coda</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{props.ticketId}</td>
          <td>{props.queue.numUtenti}</td>
          
        </tr>
        
      </tbody>
    </Table>
    <center>
          <Button className = "mt-3" align = "center" variant="primary" size="lg" 
          onClick = {() => navigate('/')}>
                Homepage
          </Button>
    </center>
    </Container>
  );
}

export default TableItem;

