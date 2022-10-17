'use strict';
/* Data Access Object (DAO) module for accessing db */

const sqlite = require('sqlite3');

// open the database
const db = new sqlite.Database('oqm.db', (err) => {
    if (err) throw err;
});