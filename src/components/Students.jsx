import {useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router'
function Students() {
    const [students, setStudents] = useState([])

    async function getAllStudents(){
        const studentsInfo = await axios.get("https://omar-ga-class.onrender.com/students")
        setStudents(studentsInfo.data)
    }

    useEffect(()=>{
        getAllStudents()
    },[])
  return (
    <div>
      <h1>All Students</h1>
      {students.map((oneStudent)=>
        <div key={oneStudent.id}>
            <h3>{oneStudent.studentName}</h3>
            <Link to={`/${oneStudent.id}`}>Show Student Details</Link>
        </div>
      )}
    </div>
  )
}

export default Students
