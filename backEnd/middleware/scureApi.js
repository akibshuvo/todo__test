const secureApi = (req,res,next)=>{
    if(req.headers.authorization == "mamapassword"){
        next()
    }else{
        res.send("Link not found")
    }
}

module.exports = secureApi
