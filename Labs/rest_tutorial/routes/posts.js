const express = require ("express");
const router = express.Router();
const Post = require("../models/Post");

//gets back all the posts
router.get("/", async (req,res) => {
    try{
        const posts = await Post.find()
        res.json(posts)
    }
    catch(err){
        res.json({message: err})
    }
})

//submits a posts
router.post("/", async (req,res) => {
    // calling this to create a new object
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
     
    try {
        const savedPost = await post.save()
        res.json(savedPost)
    }
    catch(err){
        res.json({message: err});
    }
})

//get a specific post
router.get("/:postId", async (req,res) =>{
    try{
        const post = await Post.findById(req.params.postId)
        res.json(post)
    }
    catch(err){
        res.json({message:err})
    }

})
    
module.exports = router;