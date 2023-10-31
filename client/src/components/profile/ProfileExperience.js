import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment';  

const ProfileExperience = ({
      experience :{
            title, company, from, to, current, location, description
      }
}) => {
  return (
    <ul className='list-group'>
          <li className='list-group-item'> <strong>Company : </strong>{company}</li>
          <li className='list-group-item'>
          <strong> Location : </strong>   {location} 
            </li>
          <li className='list-group-item'>
            <strong>Year : </strong>
                <Moment format='YYYY'>{from}</Moment> - {'  '}
                {!to ? 'Present' : <Moment format='YYYY'> {to} </Moment>}
          </li>
          <li className='list-group-item'>
                <strong>Position: </strong> {title}
          </li>
          <li className='list-group-item  '>
            <strong> Description : </strong>    { description} 
          </li>
    </ul>
  )
}

ProfileExperience.propTypes = {
      experience: PropTypes.object.isRequired,
}

export default ProfileExperience