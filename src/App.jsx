import './App.css'
import {Routes, Route} from 'react-router'
import Students from './components/Students'

// Step 2: import Route and Routes from "react-router"

function App() {

  // exerise 1:
  // 1. create a component called StudentDetails.jsx
  // 2. this component should send an axios request to the endpoin that contains your data
  // 3. create a route in the App.jsx to display this component
  return (
    <>
   
      <Routes>
        <Route path = "/students" element = {<Students/>}  />
      </Routes>


      

    </>
  )
}

export default App
