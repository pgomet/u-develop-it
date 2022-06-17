const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: 'Pg032301998@',
      database: 'election'
    },
    console.log('Connected to the election database.')
  );

// place above catchall route to return all the data in the candidate table
db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
  });

// GET a single candidate
//db.query(`SELECT * FROM candidates WHERE id = 1`, (err, row) => {
   // if (err) {
   //   console.log(err);
   // }
   // console.log(row);
 // });

// Delete a candidate
//db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
    //if (err) {
    //  console.log(err);
    //}
    //console.log(result);
  //});

// Create a candidate
//const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected) 
            //  VALUES (?,?,?,?)`;
//const params = [1, 'Ronald', 'Firbank', 1];

//db.query(sql, params, (err, result) => {
  //if (err) {
   // console.log(err);
 // }
 // console.log(result);
//});

// catchall route
// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });

// starts the Express.js server on port 3001. Keep at the bottom of file
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });