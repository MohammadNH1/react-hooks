import { useMemo } from "react";
import Details from "../Utils/Details";

type propsType = {
    showDetails:boolean
}
const ConditionalRendering = ({showDetails}:propsType)=>{
    const showDetailsComponents = useMemo(()=>{
        return showDetails?<Details/>:null

    },[showDetails])
    return(
        <>
        <h4>condional Rendering content</h4>
        {showDetailsComponents}
        </>
    )
}

export default ConditionalRendering