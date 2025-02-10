import React from 'react'
import {Link} from 'react-router'

function Navbar() {
  return (
    <div>
      <ul>
        {/* linking in React application */}
        <li><Link to="/students">All Students</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
