const express = require("express")
const route = express.Router()
const auhRou = require("./authReg")

route.use("/auth",auhRou)


module.exports = route;