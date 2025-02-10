import {useState, useEffect} from 'react'
import axios from 'axios'

function StudentDetails() {
    const [student,setStudent] = useState(null)

    async function getStudentData(){
        const studentInfo = await axios.get("https://omar-ga-class.onrender.com/students/4")
        setStudent(studentInfo.data)
    }

    useEffect(()=>{
        getStudentData()
    },[])
  return (
    <div>
      { student && (
        <div>
            <h2>Name: {student.studentName}</h2>
            <p>Name: {student.city}</p>
            <p>Course: {student.course}</p>

        </div>
      )}
    </div>
  )
}

export default StudentDetails
