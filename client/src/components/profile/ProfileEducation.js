import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'

const ProfileEducation = ({
      education:{
            school,degree, fieldofstudy,from , to, current, description
      }
}) => {
  return (
      <div className="conatiner">
            <div className="row">
                  
      
    <ul className='list-group'>
         <li className="list-group-item"><strong> College : </strong> {school}</li>
         
          <li className='list-group-item'>
            <strong>Year : </strong>
                <Moment format='YYYY'>{from}</Moment> - {'  '}
                {!to ? 'Continue' : <Moment format='YYYY'>{to}</Moment>}
          </li>
          <li className='list-group-item'>
                <strong>Degree : </strong> { degree }
          </li>
          <li className='list-group-item'>
                <strong>Field of Study : </strong> {fieldofstudy}
          </li>
          <li className='list-group-item'>
                { description && (
                <Fragment>
                   <strong>Description : </strong>   { description }
                </Fragment> 

                )}
          </li>
    </ul>
    </div>
      </div>
  )
}

ProfileEducation.propTypes = {
      education : PropTypes.object.isRequired,
}

export default ProfileEducation