import React from 'react'
import { useState } from 'react'

function CreateStudent() {

    const [formData,setFormData] = useState({
        studentName:"",
        course:"",
        city:""
    })

    function handleChange(event){
        setFormData({...formData,[event.target.name]:event.target.value})
    }
  return (
    <div>
      <label htmlFor="studentName"></label>
      <input
       type="text"
       name="studentName"
       id='studentName'
       value={formData.studentName}
       />

<label htmlFor="city"></label>
      <input
       type="text"
       name="city"
       id='city'
       value={formData.city}
       />

<label htmlFor="course"></label>
      <input
       type="text"
       name="course"
       id='course'
       value={formData.course}
       />
    </div>
  )
}

export default CreateStudent
