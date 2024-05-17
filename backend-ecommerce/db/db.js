import mysql from 'mysql'


const connect = () => {

    const db = mysql.createConnection({
        host: "localhost/",
        user: "root",
        password: '',
        database: "seenbeauty"
    })

    db.connect(err => {
        if (err)
            return err

        console.log("Db Connected")
    })

    return db
}

export default connect