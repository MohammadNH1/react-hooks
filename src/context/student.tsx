import { createContext, useState } from "react";
type ContainerPropsType = {
    children:React.ReactNode;
}
const initialStudentData = {
    name:'',
    email:'',
    studentId:0,
    isGraduate:false,

}
type studentDataType = {
    name:string,
    email:string,
    studentId:number,
    isGraduate:boolean
}
type studentContextType = {
    studentData: studentDataType,
    setStudentData:React.Dispatch<React.SetStateAction<studentDataType>>
}

const initialStudentContextData = {
    studentData:initialStudentData,
    setStudentData:()=>{}

} 

const StudentContext = createContext<studentContextType>(initialStudentContextData)



const StudentContextProvider = (props:ContainerPropsType)=>{

    const [studentData,setStudentData] = useState<studentDataType>(initialStudentData)

    return(
        <>
        <StudentContext.Provider value={{studentData,setStudentData}}>
            {props.children}
        </StudentContext.Provider>
        </>
    )
}

export {StudentContext,StudentContextProvider}