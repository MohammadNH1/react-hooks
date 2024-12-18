import { CounterContent } from "./components/Counter"
import { StudentContent } from "./components/student"
import { UserContent } from "./components/user"

function App() {
  return (
   <>
   <CounterContent/>
  <div style={{marginTop:'40px'}}>
  <UserContent/>
  </div>
  <div>
    <StudentContent/>
  </div>
   </>
  )
}

export default App
