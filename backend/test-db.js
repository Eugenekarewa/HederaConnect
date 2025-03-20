const db = require('./db');

async function testConnection() {
  try {
    const result = await db.query('SELECT NOW()');
    console.log('Connected to database. Current time:', result.rows[0].now);
  } catch (err) {
    console.error('Database connection error:', err);
  }
}

testConnection();