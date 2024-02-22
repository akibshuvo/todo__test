const express = require("express")
const route = express.Router()
const mongoose = require("mongoose")
const TodoUser = require("../../model/createModel")
const secureApi = require("../../middleware/scureApi")
const cors = require('cors')

route.use(express.json())
route.use(cors())


mongoose.connect('mongodb+srv://todo:csuzUcLfs8NlFkJY@cluster0.xikiztl.mongodb.net/users?retryWrites=true&w=majority')
  .then(() => console.log('db connent!'));

route.post("/todo",(req,res)=>{
   console.log(req.body)
    const {post} = req.body

   if(!post){
    res.send({nameError: "post someThing"})
   }

   let data = new TodoUser({
      post:post,
      
   })

   data.save()
   res.send(data)
})


route.get("/todo",async (req,res)=>{
  let datas = await TodoUser.find()
  res.send(datas)
  
})

route.delete("/todo", async (req,res)=>{
   const {_id, post} = req.body
 let deletes = await TodoUser.findByIdAndDelete(_id, {post})
 res.send(deletes)
 console.log("delete Done")
})

route.put("/todo", async (req,res)=>{
   const {_id, post} = req.body

   let updatesTo = await TodoUser.findByIdAndUpdate(_id, {post})
   res.send(updatesTo)
   console.log("update Done")
})


module.exports = route;