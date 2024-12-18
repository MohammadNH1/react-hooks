import { useEffect, useState } from "react"


function App() {
 const [counter,setCounter] = useState<number>(0)

 const handleClick = ()=>{
  setCounter((prev)=>prev+1)
 }
useEffect(()=>{
  if(counter===4) console.log('hello word')
},[counter])



  return (
   <>
   <h4>Hello world</h4>
   <p>{counter}</p>
   <button onClick={handleClick}>increment</button>
   
   </>
  )
}

export default App
