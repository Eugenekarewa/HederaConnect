const { Pool } = require('pg');
require('dotenv').config(); // Load environment variables from .env

const db = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  connectionString: process.env.DATABASE_URL,
  database: process.env.DB_NAME || 'hederaconnectdatabase',
  password: process.env.DB_PASSWORD !== '' ? process.env.DB_PASSWORD : null, 
  port: process.env.DB_PORT || 5432,
});

module.exports = db;
