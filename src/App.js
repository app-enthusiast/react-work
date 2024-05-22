import { useEffect, useState } from "react";
import ViewStudents from "./components/ViewStudents";
import AddStudents from "./components/AddStudents";
import NavBar from "./components/NavBar";

export default function App(){
    const studentData = [
      {id:12, name:'saqib', age:44, grade:'BSCS', email: 'saqibkhattak16@gmail.com'},
      {id :22, name:'rehman', age:44, grade:'BSCS', email: 'khan_fuuast@gmail.com'},
      {id :32, name:'lim', age:33, grade:'MCS', email: 'lim@gmail.com'},
      {id:44, name:'shakeel', age:34, grade:'DBA', email:'shakeel@gmail.com'},
      {id :56, name:'kem', age:13, grade:'MSCS', email: 'kim@gmail.com'}
    ]
    const existingStudentData = window.sessionStorage.getItem('students');
    const [ student, setStudent ] = useState(existingStudentData ? JSON.parse( existingStudentData ) : studentData)
    
    useEffect(()=>{ 
      window.sessionStorage.setItem('students', JSON.stringify(student))
      console.log('with variable')
    }, [student])

    const addNewStudent = (addstudent) => {
      setStudent([addstudent, ...student]);
    };
console.log('without variable')
    const handleEditStudent = (studentId) => { 
      alert(studentId)
    }

    const handleDeleteStudent = (studentId) => {
      // const  newStudent = student.filter((stdObj) => {
      //   if (studentdata.id !== studentId){
      //     return true;
      //   }
      //   return false; 
      // });
      const  newStudent = student.filter((stdObj) => stdObj.id !== studentId )
      // if (a==2) echo 'hello world'; 
      console.log(newStudent);
      setStudent( newStudent );
    }

    return (
      <>
        <div className="App" > 
          <header>
          <h1>Welcome to react router DOM sample</h1>
            <NavBar />
          </header>
        </div>
        <div className="flex flex-row">
              <div className="basis-1/2 py-5 m-4 ">
                <ViewStudents 
                 data = { student } 
                 handleEditStudent = { handleEditStudent }
                 handleDeleteStudent = { handleDeleteStudent }
                 />
              </div>
              <div className="basis-1/4 py-5">
                <AddStudents addStudentData = { addNewStudent } />
              </div>
        </div>
        
     </>
    );
}

