const db = require('../db');
const { v4: uuidv4 } = require('uuid');

const userModel = {
  async createUser(username, email, passwordHash) {
    const userId = uuidv4();
    const query = `
      INSERT INTO users (user_id, username, email, password_hash)
      VALUES ($1, $2, $3, $4)
      RETURNING user_id, username, email, created_at
    `;
    const result = await db.query(query, [userId, username, email, passwordHash]);
    return result.rows[0];
  },
  
  async getUserById(userId) {
    const query = 'SELECT * FROM users WHERE user_id = $1';
    const result = await db.query(query, [userId]);
    return result.rows[0];
  },
  
  // Add more methods as needed
};

module.exports = userModel;