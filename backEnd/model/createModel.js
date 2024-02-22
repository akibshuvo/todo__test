const mongoose = require("mongoose")
const { Schema } = mongoose;

const todoSchema = new Schema({
   post: String
   
});

module.exports = mongoose.model("TodoUser",todoSchema)