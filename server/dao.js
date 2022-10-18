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
