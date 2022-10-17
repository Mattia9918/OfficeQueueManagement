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
                    service.name
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
    const url = APIURL + `${serviceId}`;

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

const API = { getServices, postTicket };
export default API;
