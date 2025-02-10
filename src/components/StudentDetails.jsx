import {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router'

function StudentDetails() {
    const [student,setStudent] = useState(null)
     
    const {studentId} = useParams()

    async function getStudentData(){
        const studentInfo = await axios.get(`https://omar-ga-class.onrender.com/students/${studentId}`)
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
