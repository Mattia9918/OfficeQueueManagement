import {Service} from './Classes/Service'

const APIURL = 'http://localhost:3001/api/'

async function getServices() {
    const url = APIURL + `service`;

    try {
        const response = await fetch(url, {
            //credentials: 'include',
        });
        if (response.ok) {
            const list = await response.json();
            const servicesList = list.map((service) => 
                new Service (
                    service.id,
                    service.name,
                    service.estimated_time,
                )
            );
            return servicesList;
        } else {
            /* Application error */
            const appErrText = await response.text();
            throw new TypeError(appErrText);
        }
    } catch (err) {
        /* Network error */
        throw (err);
    }
};

async function postTicket(serviceId) {
    const url = APIURL + `ticket/${serviceId}`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            //credentials: 'include',
        });

        if (response.ok) {
            return true;

        } else {
            /* Application error */
            const appErrText = await response.text();
            throw new TypeError(appErrText);
        }

    } catch (err) {
        /* Network error */
        throw (err);
    }
};


async function getWaitingQueue(type) {
    try { 
        const response = await fetch(new URL("queue/"+type,APIURL));
        const queue = await response.json();
        if (response.ok) {
            if(queue)
              return queue.map((q) => (
                { type:q.cod,
                  users:q.users
                }
                ));
          } else {
            throw queue;  
          } 
    }
    catch(error){throw error; }
    
    
  }; 

const API = { getServices, postTicket,getWaitingQueue };
export default API;
