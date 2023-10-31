import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import '../../index.css'

const Landing = ({ isAuthenticated }) => {
  if(isAuthenticated){
    return <Navigate to='/dashboard' />
  }
  return (
     <section className='main'>
      <div className="container-fluid">
        <div className='row  align-items-center text-center' style={{height: "350px"}}>
          <div className=''>
        {/* <img src="ecomate.png" className="img-fluid" alt="Responsive image" /> */}
          <h1 className="fs-1">Echo Mate </h1>
          <p className="">
           A social media platform
          </p>
          <div className="btn">
            <Link to="/register" className="btn btn-dark">Sign Up</Link>
            <Link to="/login" className="btn btn-dark">Login</Link>
          </div>
        </div>
        </div>
      </div>
   </section>
  )
}

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
}

const mapStateToProps = state =>({
  isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToProps)(Landing)