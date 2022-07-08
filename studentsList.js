const express = require('express')
const studentData = require('./studentsList.json')
const app = express()
const port = process.env.PORT || 3003
const fs = require('fs')
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()


app.get('/', (req, res) => {
  res.send(`<b>Student List API</b>
    <p>Get List :- /studentsList</p>
  `)
})

app.get('/studentsList', (req, res) => {
  fs.readFile("studentsList.json", (err, data)=> {
    if (err) throw err;
    const student = JSON.parse(data);
    res.send({results:student});
});
})

app.listen(port, (req, res)=>{
    console.log(`Server is listaning on port ${port}`)
})
