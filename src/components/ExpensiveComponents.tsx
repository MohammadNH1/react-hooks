import { useMemo } from "react"
type ExPropsType ={
    data:number[]
}
const ExpensiveComponent=({data}:ExPropsType)=>{

  const  sumValue =  useMemo(()=>{
    console.log('rendering...')
    return data.reduce((acc,curr)=>acc+curr,0)
   
    },[data])
    return(
        <>
        <div>{sumValue}</div>
        <button onClick={()=>console.log('Hello world')}>click</button>
        </>
    )

}

export default ExpensiveComponent