import './App.css'
import {Routes, Route} from 'react-router'
import Students from './components/Students'
import StudentDetails from './components/StudentDetails'
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'

// Step 2: import Route and Routes from "react-router"

function App() {

  // exerise 1:
  // 1. create a component called StudentDetails.jsx
  // 2. this component should send an axios request to the endpoin that contains your data
  // 3. create a route in the App.jsx to display this component
  return (
    <>
   
   <Navbar/>
      <Routes>
        <Route path = "/students" element = {<Students/>}  />
        <Route path='/students/:id' element = {<StudentDetails/>}/>
        <Route path='/' element = {<Homepage/>}/>
        
      </Routes>


      

    </>
  )
}

export default App
