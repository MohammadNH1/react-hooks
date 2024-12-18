import { useContext } from "react"
import { StudentContext,StudentContextProvider } from "../context/student"
const Student = () =>{
    const {studentData,setStudentData} = useContext(StudentContext)
   

    const handleChange = (e:any)=>{
        const formValue = e.target.type ==='checkbox'? e.target.checked:e.target.value
        setStudentData({
            ...studentData,
            [e.target.name]:formValue
        })

    }

    const handleSubmit =(e:any)=>{
        e.preventDefault()
        console.log('studentData',studentData)
    }
 return(
    <>
    <div>
        <h4>Students</h4>
        <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          value={studentData.name}
          placeholder="Enter your name..."
        />{" "}
        <br />
        <input
          onChange={handleChange}
          type="text"
          name="email"
          value={studentData.email}
          placeholder="Enter your email..."
        />{" "}
        <br />
        <input
          onChange={handleChange}
          type="number"
          name="studentId"
          value={studentData.studentId}
          placeholder="Enter your student id..."
        />{" "}
        <br />
        <input onChange={handleChange} type="checkbox" name="isGraduate" />{" "}
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
    </>
 )
}


export const StudentContent = () =>{
    return(
        <>
        <StudentContextProvider>
            <Student/>
        </StudentContextProvider>
        </>
    )
}