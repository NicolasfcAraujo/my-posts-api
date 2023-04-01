const router = require("express").Router()
const postsRouter = require("./posts")

router.use("/", postsRouter)

module.exports = router