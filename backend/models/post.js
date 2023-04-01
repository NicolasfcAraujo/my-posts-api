const mongoose = require("mongoose")
const { Schema } = mongoose

const postSchema = new Schema({
    title:{
        type: String,
        require: true,
    },
    content:{
        type: String,
        require: true,
    }
}, {timestamps: true})

const Post = mongoose.model("Post", postSchema)

module.exports = { Post }