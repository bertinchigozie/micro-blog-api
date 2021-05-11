const express = require('express');
const router = new express.Router();
const authGuard = require('../middleware/authGuard');
const Post = require('../model/Post');


/**Create Post */
router.post('/post/add', authGuard, async (req, res) => {
    try {
        const incomingData = req.body;
        incomingData.dateCreated = new Date();
        incomingData.postedBy = req.user._id;


            const newPost = new Post(incomingData);
            await newPost.save();

            res.status(201).json({
                message: 'Posted Successfully',
                data: newPost
            });

    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

/**Get All my Post */
router.get('/post/all', authGuard, async (req, res) => {
    try {
        const {_id} = req.user
        const postCount = await Post.countDocuments({postedBy: _id});
        const posts = await Post.find({ postedBy: req.user._id });


            

            res.status(200).json({
                message: 'Successfully',
                data: posts,
                postCount
            });

    } catch (error) {
        res.status(500).json({error: error.message});
    }
});






module.exports = router;