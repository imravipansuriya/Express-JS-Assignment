const express = require('express')
const studentData = require('./studentsData.json')
const app = express()
const port = process.env.PORT || 5000
const fs = require('fs')
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()


app.get('/', (req, res) => {
  res.send(`<b> Get Student Details API</b>
    <p>Get Detail :- /getDetails</p>
    <p>Post Detail:- /add</p>
  `)
})

app.get('/getDetails', (req, res) => {
    // res.send(studentData)
    // console.log(req.body)
  fs.readFile("studentsData.json", (err, data)=> {
    if (err) throw err;
    const student = JSON.parse(data);
    res.send(student);
});
})


app.post('/add', jsonParser,(req, res) => {
    const studentJSON = req.body;
     studentData.push(studentJSON) 
  
    fs.writeFileSync("studentsData.json",  JSON.stringify(studentData));
    res.send({ "result": "Success" })
    res.end()  
})



app.listen(port, (req, res)=>{
    console.log(`Server is listaning on port ${port}`)
})
