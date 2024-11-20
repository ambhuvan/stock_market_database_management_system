const mysql = require('mysql');
const express = require('express');
const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '2489123098',
  database: 'stock_trading_db'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to MySQL database!');
});

// Middleware to serve static files
app.use(express.static('public'));

// Sample endpoint
app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
