'use strict';
/* Data Access Object (DAO) module for accessing db */

const sqlite = require('sqlite3');

// open the database
const db = new sqlite.Database('oqm.db', (err) => {
    if (err) throw err;
});

exports.createServiceType = (service) => {
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO SERVICE_TYPE(name, estimated_time) VALUES(?, ?)`;
        db.run(sql, [service.name, service.estimatedTime], function(err) {
            if(err) {
                reject(err);
                return;
            }
            resolve(this.lastID);
        });
    });
}


// get all Services
exports.getServices = () => {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM SERVICE_TYPE  ORDER BY name ASC';
      db.all(sql, [], (err, rows) => {
        if (err)
          reject(err);
        else {
          const services = rows.map(row => new SERVICE_TYPE(row.id, row.name, row.estimated_time));
          resolve(services);
        }
      });
    });
  };


  //get specific service type // Would be usefull(?)
exports.getSService = (id) => {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM SERVICE_TYPE WHERE id=?';
      db.all(sql, [id], (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows[0]);
        }
      });
    });
  };
  

/* add a new ticket */
exports.addTicket = (ticket) => {
    return new Promise((resolve, reject) => {
      const sql = 'INSERT INTO TICKET( id, service_type, state, issued_at, counter) VALUES(?, ?, ?, ? ,?)'; // ID replaced as an arrangable itw // can be removed(?)
      db.run(sql, [ticket.id, ticket.service_type, ticket.state, ticket.issued_at, ticket.counter], function (err) {
        if (err) reject(err);
        else resolve(this.lastID);
      });
    });
  };



  // get all Tickets // Would be useful(?) 
exports.getTickets = () => {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM TICKET ORDER BY id ASC';
      db.all(sql, [], (err, rows) => {
        if (err)
          reject(err);
        else {
          const tickets = rows.map(row => new TICKET(row.id, row.service_type, row.state, row.issued_at, row.counter)); // ID can be removed(?)
          resolve(tickets);
        }
      });
    });
  };


  //get specific ticket  // Would be usefull(?) // When the ticket retrieved by customer
exports.getSTicket = (id) => {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM TICKET WHERE id=?';
      db.all(sql, [id], (err, rows) => {
        if (err) {
  
          reject(err);
        } else {
          resolve(rows[0]);
        }
      });
    });
  };
  