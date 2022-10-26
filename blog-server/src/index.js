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

const Post = mongoose.model('Post');

app.get('/posts', async (request, response) => {
  const posts = await Post.find();
  response.send(posts);
})

app.get('/posts/:id', async (request, response) => {
  try {
    const post = await Post.findById(request.params.id);
    response.send(post);
  } catch(e) {
    response.status(400).send({message: e.message})
  }
})

app.post('/posts', async (request, response) => {
  const post = new Post ({
    title: request.body.title,
    body: request.body.body
  });

  try {
    await post.save();
    response.send(post);
  } catch (e) {
    response.status(400).send({message: e.mesage})
  }
})

app.delete('/posts/:id', (request, response) => {

})

app.listen(3004, () => {
  console.log('Server is running on http://localhost:3004')
})
