const chai = require('chai');
const chaiHttp = require('chai-http');
const { getServices } = require('../dao');
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
