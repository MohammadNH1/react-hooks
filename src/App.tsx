import { useEffect, useRef, useState } from "react"
// https://www.robinwieruch.de/typescript-react-useref/
function App() {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(()=>{
    if(inputRef.current){
      inputRef.current.focus()
    }

  },[])

  type counterRefType= {
    increament:number,
    decreament:number
  }
  const btnRef = useRef<counterRefType>({
    increament:0,
    decreament:0
  })

  const [count,setCount] = useState<number>(0)

  const handleIncreament = ()=>{
    btnRef.current.increament++;
    setCount(count+1);
  }
  const handleDecreament = () =>{
    btnRef.current.decreament++;
    setCount(count-1)
  }
  return (
   <>
   <input type="text" ref={inputRef} placeholder="Enter your name..."/> <br />
   <p>count: {count}</p>
   <button onClick={handleIncreament}>+</button>
   <button onClick={handleDecreament}>-</button> <br />
   <div> increament cliked {btnRef.current.increament} times</div> 
   <div> decreament clicked {btnRef.current.decreament} times</div>
   </>
  )
}

export default App
