
type propsType ={
    onClick:()=>void
}
const ChildComponents =({onClick}:propsType)=>{
   return(
    <>
     <button onClick={onClick}>Click</button>
    </>
   )
}
export default ChildComponents