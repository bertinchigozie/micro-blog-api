const mongoose = require('mongoose');
require('dotenv').config();

const postSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, 'Please add a title'],
    },

    body:{
        type: String,
        required: [true,'Please add to body']
    },

    category:{
        type: String,
        required: [true, 'Please add category'],
    },

    tag:{
        type: String,
        

    },

    dateCreated:{
        type: String,
    },

    postedBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    
    },

});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;