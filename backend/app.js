const express = require("express")
const path = require('path')
const mongoose = require('mongoose');
const mongoURl = require('./database')
const uri = mongoURl.url;
const cors = require('cors')
var AuthController = require('./controllers/AuthController');
var ItemController = require('./controllers/ItemController')





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
app.use(cors())

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
})

app.post('/CreateUser', AuthController.registerUser)
app.post('/CreateItem', ItemController.createItem)
app.get('/getWishList/:id', ItemController.getWishlist)

app.listen(port, () => console.log(`Listening on Port ${port}`));