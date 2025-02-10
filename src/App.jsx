import './App.css'
import {Routes, Route} from 'react-router'
import Students from './components/Students'

// Step 2: import Route and Routes from "react-router"

function App() {

  return (
    <>
   
      <Routes>
        <Route path = "/students" element = {<Students/>}  />
      </Routes>


      

    </>
  )
}

export default App
