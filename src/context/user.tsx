import { createContext, useState } from "react";

type containerProps = {
    children:React.ReactNode
}


const initialuserData = {
    name:'',
    age:0,
    prof:'',
    IsMarried:false
}

type userDataType = {
    name:string,
    age:number,
    prof:string,
    IsMarried:boolean

}

type userContextType = {
    userData: userDataType
    setUserData:React.Dispatch<React.SetStateAction<userDataType>>
}



const userContextInitialState = {
     userData:initialuserData,
     setUserData:()=>{}
}

const UserContext = createContext<userContextType>(userContextInitialState)


const UserContextProvider = (props:containerProps)=>{

    const [userData,setUserData] = useState<userDataType>(initialuserData)
    return(
        <>
        <UserContext.Provider value={{userData,setUserData}}>
            {props.children}
        </UserContext.Provider>
        </>
    )

}

export {UserContext,UserContextProvider}