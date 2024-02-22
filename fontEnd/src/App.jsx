import axios from "axios"
import { useEffect, useState } from "react"


function App() {

  let [value, setValue] = useState("")
  let [postData, setPostData] = useState([])
  console.log(postData,"lll")
  
  let handleClick = ()=>{
    axios.post("http://localhost:8000/api/v1/start/todo",{
      post:value
    }).then(()=>{
      location.reload()

    })

    console.log(value)
  }

  useEffect(()=>{
    axios.get("http://localhost:8000/api/v1/start/todo").then((user)=>{
      setPostData(user.data)
      console.log(user)
    })
  },[])

  let handleDe = (ids)=>{
    axios.delete("http://localhost:8000/api/v1/start/todo/" + ids).then(()=>{
      location.reload()
   
    })
  }
  

  return (
    <>
     <div className="box">
      <div className="content">
      <h1>ToDo's Projects...</h1>

      <div className="btn">
      <input onChange={(e)=>setValue(e.target.value)} className="inputs" type="text" placeholder="Enter Your Post"/>
     <button onClick={handleClick}>Post</button>
     </div>
     </div>

{postData.map(item=>(
  <ul className="list">
      <li>{item.post} <button onClick={()=>handleDe(item._id)}>Delete</button> <button>Edit</button></li>
     </ul>
))}
     
     </div>
    </>
  )
}

export default App
