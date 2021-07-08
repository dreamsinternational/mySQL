const express = require("express");
const app = express();
const path = require('path');
const mysql = require("mysql")

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const con = mysql.createConnection({
  host: 'localhost',
  user: 'dreams',
  password: 'dreams',
  database: 'dreams'
});

con.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL Server!');
});

app.get("/",(req,res) => {
  res.render('home');
  // con.query('SELECT * from user', (err, rows) => {
  //     if(err) throw err;
  //     console.log('The data from users table are: \n', rows);
  // });
});

app.post("/",(req,res) => {
  const {firstName, emailInput, skill, duration} = req.body;
  let insertQuery = 'INSERT INTO ?? (??,??,??,??) VALUES (?,?,?,?)';
  let query = mysql.format(insertQuery,["user","name","skill","duration","email",firstName, skill, duration, emailInput]);
  con.query(query, (err, response)=>{
    console.log(response.insertId);
  })
  console.log(firstName, emailInput, skill, duration);
  res.send({firstName, emailInput, skill, duration})
})

app.listen(3000, () => {
  console.log('Server is running at port 3000');
});