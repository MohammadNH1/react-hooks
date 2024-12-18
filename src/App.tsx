import ChildComponents from "./components/ChildComponents"
import { useCallback, useState } from "react"
// https://dev.to/elhamnajeebullah/react-typescript-usecallback-hook-3bnm

function App(){

const [count,setCount] = useState<number>(0)
const hanldeClick = useCallback(()=>{
  setCount(count+1)
},[count])


return(
  <div>
  <h4> Hello World</h4>
  <p>{count}</p>
  <ChildComponents onClick={hanldeClick}/>
  </div>
  
)
}

export default App