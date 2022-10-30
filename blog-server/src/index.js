const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('./models/Post');

// TcUqxBOnmqCQFKLU

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(
  'mongodb+srv://mark:TcUqxBOnmqCQFKLU@cluster0.ba0sc9n.mongodb.net/?retryWrites=true&w=majority'
)

mongoose.connection.on('connected', () => {
  console.log('connected to DB');
})

app.use('/posts', require('./routes/posts'));

app.delete('/posts/:id', (request, response) => {

})

app.listen(3004, () => {
  console.log('Server is running on http://localhost:3004')
})
