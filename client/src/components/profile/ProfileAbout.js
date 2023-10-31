import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const ProfileAbout =({
      profile:{
            bio,
            skills,
            user: { name }
      }
}) => {
  return (
    <div className='container-fluid text-center'>
      <div className="row ">

      <div className="col"></div>
      <div className="col">
          { bio && (
                <Fragment>
                  {/* {name.trim().split(' ')[0]}'s */}
                      <h4 className=" text-decoration-underline"> About</h4>
                      <p>{bio}</p>
                      {/* <div className="line"></div> */}
                </Fragment>
          )}
            <Fragment>
            <h4 className="text-decoration-underline">Skills</h4>
          
          <div className="container">
            
                  {skills && skills.map((skill, index) =>(
                      <div key={index} className="" >
                          <i className='fas fa-chekk'></i> {skill}
                      </div>
                ))}
                
               
          </div>
            </Fragment>
            </div>
            <div className="col"></div>
    </div>
    </div>
  )
}

ProfileAbout.propTypes = {
      profile: PropTypes.object.isRequired,
}

export default ProfileAbout