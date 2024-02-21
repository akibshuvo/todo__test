const express = require("express")
const app = express()
const routess = require("./routes")

// const mongoose = require("mongoose")
// const TodoUser = require("./model/createModel")

// csuzUcLfs8NlFkJY

// app.use(express.json())

// mongoose.connect('mongodb+srv://todo:csuzUcLfs8NlFkJY@cluster0.xikiztl.mongodb.net/users?retryWrites=true&w=majority')
//   .then(() => console.log('db connent!'));

// app.post("/",(req,res)=>{
//    const {name, email, password} = req.body

//    if(!name){
//     res.send({nameError: "enter Your Name"})
//    }

//    if(!email){
//     res.send({emailError: "enter Your email"})
//    }

//    if(!password){
//     res.send({passwordError: "enter Your password"})
//    }

//    let data = new TodoUser({
//       name:name,
//       email:email,
//       password:password
//    })

//    data.save()
//    res.send(data)


// })


app.use(routess)


app.listen(8000,()=>{
    console.log("port connect")
})