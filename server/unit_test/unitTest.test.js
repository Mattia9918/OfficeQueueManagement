//import {createServiceType, deleteServices, deleteTicket, getServices, postTicket} from '../dao'
const dao = require('../dao');


describe("test user", () => {
    
    beforeEach(async () => {    
        const service1 = {
            name: "service1",
            estimatedTime: "10"
        }

        const service2 = {
            name: "service2",
            estimatedTime: "10"
        }

        await dao.deleteTicket();
        await dao.deleteServices();

        try {

            //add 2 services
            await dao.createServiceType(service1.name, service1.estimatedTime);
            await dao.createServiceType(service2.name, service1.estimatedTime)

        } catch (err) {
            console.log(err)
        }
    })

    testgetServices();
});

function testgetServices() {
    test("Testing getServices", async () => {
        let res = await dao.getServices();
        expect(res).toEqual(
            [
                {
                    id: 1,
                    name: "service1",
                    estimated_time: "10"
                }, {
                    id: 2,
                    name: "service2",
                    estimated_time: "10"
                }
            ]
        )
    })
}
