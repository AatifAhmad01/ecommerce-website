// db.js
const mysql = require('mysql2');

const db = mysql.createPool({
    connectionLimit: 10, // Adjust based on your needs
    host: "localhost",
    user: "root",
    password: "",
    database: "seenbeauty"
});

// Publishment
// const db = mysql.createPool({
//     connectionLimit: 10, // Adjust based on your needs
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: "cx9ct6*ne#~9$Z}]",
//     database: process.env.DB_NAME
// });

db.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Database connection was closed.');
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('Database has too many connections.');
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('Database connection was refused.');
        }
        console.error(err);
        return;
    }

    if (connection) connection.release();
    console.log('DB Connected');
});


module.exports = db.promise();
