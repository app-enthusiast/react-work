import { useEffect, useState } from "react";

export default function ViewStudents( { data, handleEditStudent, handleDeleteStudent }  ){
   const [students, setStudents] = useState(data)

    useEffect(()=> {
        console.log('hello world');
      setStudents(data)
    },[data])
    
    return (
        <table className="border-separate border-spacing-2 border border-slate-500"> 
            <thead>
                <tr>
                    <th className="border border-slate-500">Sr.No</th>
                    <th className="border border-slate-500">ID</th>
                    <th className="border border-slate-500">Name</th>
                    <th className="border border-slate-500">Age</th>
                    <th className="border border-slate-500">Grade</th>
                    <th className="border border-slate-500">Email</th>
                    <th className="border border-slate-500" colSpan="2">Action</th>
                </tr>
            </thead>
            <tbody>
            { data && data.length ? ( 
                data.map(( student, index )=> {  
                    return (
                        <tr key={student.id}>
                            <td className="border border-slate-500">{index + 1}</td>
                            <td className="border border-slate-500">{student.id}</td>
                            <td className="border border-slate-500">{student.name}</td>
                            <td className="border border-slate-500">{student.age}</td>
                            <td className="border border-slate-500">{student.grade}</td>
                            <td className="border border-slate-500">{student.email}</td>
                            <td className="border border-slate-500"><a  onClick={() => handleEditStudent(student.id)}>Edit</a></td>
                            <td className="border border-slate-500"><a  onClick={() => handleDeleteStudent(student.id)}>Delete</a></td>
                        </tr>
                    )  
                })
            ):
            (
                <tr>
                    <td colSpan="8" className="border border-slate-500" >No record found!</td>
                </tr>
            )} 
          </tbody>
        </table>
    );       
}
