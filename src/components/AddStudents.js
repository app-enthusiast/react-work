
import React, { useState } from "react";
export default function AddStudents( { addStudentData } ) {
  
  const [formData, setFormData] = useState( { id: "", name: "", age: "", grade: "", email: "" } );
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
      addStudentData(formData);
      setFormData({id: "", name: "", age: "", grade: "", email: ""});
   }  
    return (
      <form className="shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={ handleSubmit }>
        <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">ID</label>
            <input 
            type="text" 
            name="id"
            value={formData.id}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
        </div>

        <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="userage">Name</label>
            <input 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
          </div>
       
          <div className="mb-4">
            <label className="block text-gray-7s00 text-sm font-bold mb-2">Age</label>
            <input 
            type="text" 
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
          </div>
       
       <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Grade</label>
            <input 
            type="text" 
            name="grade"
            value={formData.grade}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
        </div>
        <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="userid">Email</label>
              <input 
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
        </div>
        <div className="flex items-center justify-between">
        <button className="bg-gray-500 text-white font-bold py-2 px-4 rounded" type="submit"> AddStudent </button>
        </div>  
      </form>
    )
  }

  
