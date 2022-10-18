'use strict';
/* Data Access Object (DAO) module for accessing db */

const sqlite = require('sqlite3');

// open the database
const db = new sqlite.Database('oqm.db', (err) => {
    if (err) throw err;
});

/*** TICKET TABLE ***/

// Get Ticket from id
exports.getTicket = (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM TICKET WHERE id = ?';
        db.get(sql, [id], (err, row) => {
            if (err)
                reject(err);
            else
                resolve(row);
        })
    })
}

// Get person in queue
exports.getQueue = (service_type, issued_at) => {
    return new Promise((resolve, reject) => {
        const sql =
            "SELECT count(*) FROM TICKET WHERE service_type = ? AND issued_at < ? AND state = 'open'";
        db.get(sql, [service_type, issued_at], (err, row) => {
            if (err)
                reject(err);
            else
                resolve(row);
        })
    })
}

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
