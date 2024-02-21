const express = require("express")
const route = express.Router()
const authUer = require("./api") 

let baseUrl = "/api/v1"

route.use(baseUrl,authUer)


module.exports = route;