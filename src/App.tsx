import { useState } from "react"

const initialState = {
  name:'',
  email:''
}
function App() {
  const [data,setData] = useState(initialState)
  const handleChange =(e:any)=>{
    setData({...data,
      [e.target.name]:e.target.value})
  }
  const handleSubmit=(e:any)=>{
    e.preventDefault()
    console.log('data',data)
    setData({name:'',email:''})
  }
  return (
   <>
   <h4>Hello world</h4>
   <form onSubmit={handleSubmit}>
    <input type="text" name="name" value={data.name} onChange={handleChange} placeholder="Enter your name"/>
    <input type="text" name="email" value={data.email} onChange={handleChange} placeholder="Enter your password" />
    <button  type="submit">Submit</button>
   </form>
   </>
  )
}

export default App
