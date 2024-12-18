import { useState,createContext } from "react";

type containerProps = {
    children:React.ReactNode
}

type counterContextType ={
    counter:number,
    setCounter:React.Dispatch<React.SetStateAction<number>>,
    greet:string,
    setGreet:React.Dispatch<React.SetStateAction<string>>

}

const initialCounterState = {
    counter:0,
    setCounter:()=>0,
    greet:'',
    setGreet:()=>''
}


 const CounterContext = createContext<counterContextType>(initialCounterState);

 const CounterProvider = (props:containerProps)=>{
    const [counter,setCounter] = useState<number>(0)
    const [greet,setGreet] = useState<string>('')
    return(
       <CounterContext.Provider value={{counter,setCounter,greet,setGreet}}>
        {props.children}
       </CounterContext.Provider>
    )
}

export {CounterContext,CounterProvider}