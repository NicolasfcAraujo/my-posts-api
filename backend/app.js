const express = require("express")
const cors = require("cors")

const conn = await require("./db/conn")
const routes = require("./routes/router");

const app = express()

conn()
app.use(cors())
app.use(express.json())
app.use("/api", routes)


app.listen(3000, function(){
    console.log("Server Online")
})