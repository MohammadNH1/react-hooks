import { useState } from "react"
import ConditionalRendering from "./components/ConditionalRedering"
import ExpensiveComponent from "./components/ExpensiveComponents"
// https://dev.to/kirubelkinfe/mastering-usememo-in-react-with-typescript-4-different-use-cases-for-usememo-5gal

function App(){
  const [showDetails,setShowDetails] = useState<boolean>(true)
  const handleToggle = ()=>{
    setShowDetails(!showDetails)
  }
return(
  <>
  <h4> Hello World</h4>
  <ExpensiveComponent data={[10,20,100,200,6000,10,10000]}/>
  <ConditionalRendering showDetails={showDetails}/>
  <button onClick={handleToggle}>{showDetails?'hide details page':'show details page'}</button>
  </>
  
)
}

export default App