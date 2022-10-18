
/* 
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
*/


import {Container, Button} from 'react-bootstrap';
import API from "./API";
import Table from 'react-bootstrap/Table';
import   {useState,useEffect} from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

function TableItem(props) {

  const navigate = useNavigate();
  const [queue,setQueue] = useState({})


  useEffect( 
    ()=>{
      const getQueue = async()=>{
        try{

          const q = await API.getWaitingQueue(props.ticketId);
          
          setQueue(q);  
          
        }
        catch(err){}
      }; 
      getQueue(); 
      
    },[]);

  return (
  <Container className="shadow-sm p-2" id = "bodytable" >
    <Table className = "mt-5" striped bordered hover variant="light">
      <thead>
        <tr>
          <th>Codice Ticket</th>
          <th>Utenti in coda</th>
          <th>Tempo (min)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{props.ticketId}</td>
          <td>{queue.numUtenti}</td>
          <td>20</td>
        </tr>
        
      </tbody>
    </Table>
    <center>
          <Button align = "center" variant="primary" size="lg" 
          onClick = {() => navigate('/')}>
                Homepage
          </Button>
    </center>
    </Container>
  );
}

export default TableItem;

