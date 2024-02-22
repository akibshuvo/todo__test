const express = require("express")
const route = express.Router()
const auhRou = require("./authReg")

route.use("/start",auhRou)


module.exports = route;