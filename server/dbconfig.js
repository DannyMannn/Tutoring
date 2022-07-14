//accesses variables through process.env.
require('dotenv').config();
const USER = process.env.USER;
const PASSWORD = process.env.PASSWORD;

const config = {
    user: USER, 
    password: PASSWORD,
    database: 'Tutoring',
    server: 'localhost', //will be running on my localhost
    options:{
        trustedConnection: true,
        enableArithAort: true,
        instanceName: 'MYSQLSERVER',
        trustServerCertificate: true
    },
    port: 1433
};

module.exports = config;