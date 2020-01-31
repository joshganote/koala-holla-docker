const pg = require('pg');
const Pool = pg.Pool;
const pool = new Pool ({
    database: process.env.POSTGRES_DB ? process.env.POSTGRES_DB : "koala_holla",
    host: process.env.POSTGRES_HOST ? process.env.POSTGRES_HOST : "localhost",
    user: process.env.POSTGRES_USER ? process.env.POSTGRES_USER : 'postgres',
    password: process.env.POSTGRES_PASSWORD ? process.env.POSTGRES_PASSWORD : 'postgres',
    port: process.env.PORT_DB ? process.env.PORT_DB : 5432,
    max: 10,
    idleTimeoutMillis: 30000
});

pool.on('connect', ()=>{
    console.log('connected!');
});

pool.on('error', (error) => {
    console.log(`err:  ${error}`);
});

module.exports = pool;