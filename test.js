const mongoose = require('mongoose')

const Post = require('./database/models/Post')

mongoose.connect('mongodb://localhost/node-js-test-blog')

// Post.find({
//   // title: 'My First Blog Post'
// }, (error, posts) => {
//   console.log(error, posts)
// })

// Post.findById("5ca2829e5ea1140c18907210", (error, post) =>{
//   console.log(error,post)
// })

// Post.findByIdAndUpdate("5ca28175a00c3b3d44b76ece", {
//   title: 'My First Blog Post title lorem ipsum'
// }, (error, post) => {
//   console.log(error, post)
// })

// Post.create({
//   title: 'My Second Blog Post',
//   description: 'Second Blog post description',
//   content: 'Second Lorem ipsum content.'
// }, (error, post) =>{
//   console.log(error, post)
// })


// This File tests MongoDb Creation, Reading, Updating, and Finding records...