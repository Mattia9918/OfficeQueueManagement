import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Ticket from './Ticket';
import API from './API';
import Layout from './Layout';
import ServiceType from './ServiceType';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TableItem from './QueuePage.js'

function App() {

  const [services, setServices] = useState();
  const [ticketId, setTicketId] = useState();

  async function takeTicket(serviceId) {
    let myTicketId = await API.postTicket(serviceId);
    setTicketId(myTicketId);
  }


  async function loadServices() {
    let servicesList = await API.getServices();
    setServices(servicesList);
  }

  async function postServiceType(serviceType) {

    let servType = await API.postServiceType(serviceType);


  }

  //Loads only during the first hydration the data about available services
  useEffect(() => {
    loadServices();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} >
          <Route path='/' element={<Ticket takeTicket={takeTicket} setTicketId={setTicketId} loadServices={loadServices} services={services} />} />
          <Route path='/queue' element={<TableItem ticketId={ticketId} />} />
          <Route path='/serviceType' element={<ServiceType postServiceType={postServiceType} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
