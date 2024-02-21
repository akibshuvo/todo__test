const mongoose = require("mongoose")
const { Schema } = mongoose;

const todoSchema = new Schema({
   name: String,
   email: String,
   password: String
});

module.exports = mongoose.model("TodoUser",todoSchema)