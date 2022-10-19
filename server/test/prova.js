const chai = require('chai');
const chaiHttp = require('chai-http');
const { getServices } = require('../dao');
chai.use(chaiHttp);
chai.should();

const { app } = require('../index');
var agent = chai.request.agent(app);

describe('test ticket apis', () => {

    beforeEach(async () => {
        await agent.delete('/api/ticket/delete')
    })

    postTicket(201, 2);

});

describe('test service apis', () => {

    beforeEach(async () => {
        await agent.delete('/api/services/delete')
    })

    createServiceType(201, { "name": "ciao", "estimatedTime": "200" });

});

describe('test get waiting queue', () => {

    beforeEach(async () => {
        await agent.delete('/api/ticket/delete');
        await agent.post('/api/ticket/1');
        await agent.post('/api/ticket/2');
        await agent.post('/api/ticket/1');
        await agent.post('/api/ticket/1');
    })

    getQueue(2, 4);

});


function postTicket(expectedHTTPStatus, serviceId) {
    it('test post /api/ticket/:serviceId', async () => {
        await agent.post('/api/ticket/' + `${serviceId}`)
            .send()
            .then(function (res) {
                res.should.have.status(expectedHTTPStatus);
            });
    });
}

function createServiceType(expectedHTTPStatus, serviceType) {
    it('test post /api/serviceType', async () => {
        await agent.post('/api/serviceType')
            .send(serviceType)
            .then(function (res) {
                res.should.have.status(expectedHTTPStatus);
            })

    })
}

function getQueue(expectedQueue, ticket_id) {
    it('test get /api/queue/:id', async () => {
        await agent.get('/api/queue/' + `${ticket_id}`)
            .then(function (res) {
                res.should.have.status(200)
                res.body.numUtenti.should.be.equal(2)
            })
        }
    )
}