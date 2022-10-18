
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

          const q = await API.getQueue();
          
          setQueue(q); 
          
        }
        catch(err){}
      }; 
       //getQueue()
      
    },[]);

  return (
  <Container className="shadow-sm p-2" id = "bodytable" >
    <Table className = "mt-5" striped bordered hover variant="light">
      <thead>
        <tr>
          <th>Tipo Servizio</th>
          <th>Utenti in coda</th>
          <th>Tempo (min)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Servizio_1</td>
          <td>10</td>
          <td>20</td>
        </tr>
        <tr>
          <td>Servizio_2</td>
          <td>15</td> 
          <td>35</td> 
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

