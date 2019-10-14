const mysql = require('mysql')

const db = mysql.createConnection({
    host:'localhost',
    user: 'Bintang',
    password: 'abc123',
    database: 'moviepurwadhika',
    port: 3306,
    // multipleStatements: true
    // timezone: 'UTC'
})

module.exports = {
    sqlDB : db
}