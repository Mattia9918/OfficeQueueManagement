'use strict';

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const dao = require('./dao');

/* -- SERVER AND MIDDLEWARE CONFIGURATION */

/* Express server init */
const app = new express();
const port = 3001;

/* Middlewares */
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

/* -- API -- */

app.get('/api/service', async (req, res) => {
  try {
    const services = await dao.getServices();
    return res.status(200).json(services);
  } catch (err) {
    return res.status(500).json({ error: err });
  }
});

app.post('/api/ticket/:serviceId', async (req, res) => {
  const serviceId = req.params.serviceId;
  try {
    await dao.postTicket(serviceId);
    return res.status(201).end();
  } catch (err) {
    return res.status(503).json({ error: err });
  }
});

app.post(`/serviceType`, async(req, res) => {
  try {
    console.log(req.body)
    const status = await dao.createServiceType(req.body);
    if (status === '422')
            res.status(422).json({ error: `Validation of request body failed` }).end();
        else 
            return res.status(201).end();
  } catch (err) {
    res.status(503).json({error: `Generic error`}).end();    
  }
})

// Waiting Queue
app.get("/api/queue/:id",async (req, res) => {
  try {
      const ticket = await dao.getTicket(req.params.id);
      const queue = await dao.getQueue(ticket.service_type, ticket.issued_at);
      res.status(200).json(queue);
  } catch (err) {
      res.status(500).end();
  }
});


/* -- SERVER ACTIVATION -- */
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});