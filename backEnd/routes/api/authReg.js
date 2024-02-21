const express = require("express")
const route = express.Router()
const mongoose = require("mongoose")
const TodoUser = require("../../model/createModel")

route.use(express.json())

mongoose.connect('mongodb+srv://todo:csuzUcLfs8NlFkJY@cluster0.xikiztl.mongodb.net/users?retryWrites=true&w=majority')
  .then(() => console.log('db connent!'));

route.post("/reg",(req,res)=>{
    const {name, email, password} = req.body

   if(!name){
    res.send({nameError: "enter Your Name"})
   }

   if(!email){
    res.send({emailError: "enter Your email"})
   }

   if(!password){
    res.send({passwordError: "enter Your password"})
   }

   let data = new TodoUser({
      name:name,
      email:email,
      password:password
   })

   data.save()
   res.send(data)
})


module.exports = route;