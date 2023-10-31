import React from 'react'
import { Link } from 'react-router-dom'


const DashboardActions = () => {
  return (
    <div className='text-center'>

          <Link to='/edit-profile' className='btn btn-dark'>
                <i className="fa fa-user-circle"></i> Edit Profile
          </Link>
          <Link to='/add-education' className='btn btn-dark'>
                <i className="fas fa-graduation-cap"></i> Add Education
          </Link>
          <Link to='/add-experience' className='btn btn-dark'>
                <i className=" fab fa-black-tie"></i> Add Experience
          </Link>
         
    </div>
  )
}

export default DashboardActions