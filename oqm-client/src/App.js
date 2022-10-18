import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Ticket from './Ticket';
import API from './API';
import Layout from './Layout';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//import TableItem from './QueuePage.js'

function App() {

  const [services, setServices] = useState();

  async function takeTicket(serviceId){
    await API.postTicket(serviceId);
  }

  async function loadServices(){
    let servicesList = await API.getServices();
    setServices(servicesList);
  }

  //Loads only during the first hydration the data about available services
  useEffect(() => {
    loadServices();
  }, []);

  return (
    <BrowserRouter>
        <Routes>
        <Route element={<Layout/>} >
          <Route path='/' element = {<Ticket takeTicket = {takeTicket} loadServices = {loadServices} services = {services} />}/>
        </Route>
        </Routes>
    </BrowserRouter>  
  );
}

export default App;
