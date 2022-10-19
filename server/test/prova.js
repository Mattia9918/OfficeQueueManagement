const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
chai.should();

const { app }  = require('../index');
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

    const service1 = 
    {
        id: 1,
        name: "service1" ,
        estimatedTime: "30",
    }

    const service2 = 
    {
        id: 2,
        name: "service2" ,
        estimatedTime: "10",
    }

    getServices(200, service1, service2);

    
});


function postTicket(expectedHTTPStatus, serviceId) {
    it('test post /api/ticket/:serviceId', async () => {
        await agent.post('/api/ticket/'+`${serviceId}`)
            .send()
            .then(function (res) {
                res.should.have.status(expectedHTTPStatus);
            });
    });
}

function getServices(expectedHTTPStatus, service1, service2) {
    it('test get /api/service', async () => {
        await agent.post('/api/serviceType')
        .send(service1)
    
        await agent.post('/api/serviceType')
        .send(service2)

        await agent.get('/api/service')
        .send()
        .then(function (res) {
            res.should.have.status(expectedHTTPStatus);
            res.body.should.eql([
                {
                    "id": service1.id,
                    "name": service1.name,
                    "estimated_time": service1.estimatedTime
                    
                },
                {
                    "id": service2.id,
                    "name": service2.name,
                    "estimated_time": service2.estimatedTime
                    
                },
            ]);
        });
    })
}
    
