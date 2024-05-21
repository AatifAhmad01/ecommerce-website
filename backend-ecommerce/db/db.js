// import mysql from 'mysql'


// const connect = () => {

//     const db = mysql.createConnection({
//         host: "5.39.63.229",
//         user: "seenbeauty_admin",
//         password: "6At$kN6B-c~xZJpd5%",
//         database: "seenbeauty_db"
//     })

//     db.connect(err => {
//         if (err) {
//             console.log(err)
//             return
//         }

//         console.log("Db Connected")
//     })

//     return db
// }

// export default connect


const mysql = require('mysql')


const connect = () => {
    const db = mysql.createPool({
        connectionLimit: 10, // Adjust based on your needs
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    });

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

    return db;
}

module.exports = connect;
