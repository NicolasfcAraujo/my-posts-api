const mongoose = require("mongoose")

async function main(){
    try {
        mongoose.set("strictQuery", true)
        await mongoose.connect("mongodb+srv://nicolasfcaraujo:rgknXb0UgXUSjxPL@cluster0.srjcyno.mongodb.net/?retryWrites=true&w=majority")
    } catch (error) {
        console.log(`Error: ${error}`)
    }   
}

module.exports = main