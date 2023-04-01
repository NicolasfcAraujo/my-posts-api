const { Post: PostModel } = require("../models/post")

const postController = {
    create: async (req, res) => {
        try {
            const post = {
                title: req.body.title,
                content: req.body.content
            }
            const response = await PostModel.create(post)
            res.status(201).json({response, msg: "Post successfully created"})
        } catch (error) {
            console.log(error)
        }
    },
    getAll: async (req, res) => {
        try {
            const posts = await PostModel.find()
            res.json(posts)
        } catch (error) {
            console.log(error)
        }
    },
    get: async (req, res) => {
        try {
            const id = req.params.id
            const post = await PostModel.findById(id)

            if(!post) {
                res.status(404).json({msg: "404 NOT FOUND"})
                return
            }

            res.json(post)
        } catch (error) {
            console.log(error)
        }
    },
    delete: async (req, res) => {
        try {
            const id = req.params.id
            const post = await PostModel.findById(id)

            if(!post) {
                res.status(404).json({msg: "404 NOT FOUND"})
                return
            }

            const deletedPost = await PostModel.findByIdAndDelete(id)

            res.status(200).json({deletedPost, msg: "Post successfully deleted"})
        } catch (error) {
            console.log(error)
        }
    },
    update: async (req, res) => {
        const id = req.params.id
        const post = {
            title: req.body.title,
            content: req.body.content
        }

        const updatedPost = await PostModel.findByIdAndUpdate(id, post)

        if(!updatedPost){
            res.status(404).json({msg: "404 NOT FOUND"})
            return
        }

        res.status(200).json({post, msg: "Updated"})
    }
}



module.exports = postController