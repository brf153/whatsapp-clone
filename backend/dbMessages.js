const mongoose = require("mongoose")

const whatsappSchema = mongoose.Schema({
    message: String,
    name: String,
    timestamp: {type:String,default:Date.now()},
    received: Boolean
})

module.exports = mongoose.model("messagecontent",whatsappSchema)