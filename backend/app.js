const express = require("express")
const path = require('path')
const mongoose = require('mongoose');
const mongoURl = require('./database')
const uri = mongoURl.url;
var AuthController = require('./controllers/AuthController');





const app = express()
const port = 5000

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('MongoDB Connected…')
  })
  .catch(err => console.log(err))

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
})

app.post('/CreateUser', AuthController.registerUser)

app.listen(port, () => console.log(`Listening on Port ${port}`));