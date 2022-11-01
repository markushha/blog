const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
const Post = mongoose.model('Post');

router.get('/', async (request, response) => {
  try {
    const posts = await Post.find();
    response.send(posts);
  } catch (e) {
    response.status(400).send({message: e.message})
  }
});

router.get('/:id', async (request, response) => {
  try {
    const post = await Post.findById(request.params.id);
    response.send(post);
  } catch(e) {
    response.status(400).send({message: e.message})
  }
});

router.post('/', async (request, response) => {
  const post = new Post ({
    title: request.body.title,
    body: request.body.body
  });

  try {
    await post.save();
    response.send(post);
  } catch (e) {
    response.status(400).send({message: e.mesage});
  }
})

router.patch('/:id', async (request, response) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(request.params.id, request.body, { new: true });
    response.send(updatedPost);
  } catch (e) {
    response.status(200).send({message: e.message})
  }
})

router.delete('/:id', async (request, response) => {
  try {
    const deletedPost = await Post.findByIdAndRemove(request.params.id);
    response.send(deletedPost);
  } catch (e) {
    response.status(400).send({message: e.message});
  }
})

module.exports = router;
