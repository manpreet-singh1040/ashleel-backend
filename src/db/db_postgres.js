import pg from 'pg'
const { Pool } = pg

const config = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    max: 10                             //Maximum connections a pool can contain
}

const db = new Pool(config)

export default db;