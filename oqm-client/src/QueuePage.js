
/* 
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
*/

import API from "./API";
import Table from 'react-bootstrap/Table';
import   {useState,useEffect} from 'react';

function TableItem() {

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
    <Table striped bordered hover variant="dark">
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
  );
}

export default TableItem;

