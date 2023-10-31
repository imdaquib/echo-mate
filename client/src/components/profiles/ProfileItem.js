import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProfileItem = ({
  profile: {
    user: { _id, avatar, name },
    status,
    company,
    location,
    skills,
  },
}) => {
  return (
    <div className='card mb-3 align-items-center'>
      <div className='container-fluid'>
        <div className='row'>
          
          <div className='col'>
            <img src={avatar} className='rounded-circle responsive-img' alt='' />
          </div>

          <div className='col profile-name mt-3'>
            <h3>{name}</h3>
            <p>
              {status} {company && <span> at {company} </span>}{' '}
            </p>
            <p>{location && <span>{location}</span>}</p>
            <Link to={`/profile/${_id}`} className='btn btn-sm btn-dark'>
              View Profile
            </Link>
          </div>

          <div className='col mt-3'>
            <h3>Skills</h3>
            <ul>
              {skills.slice(0, 4).map((skill, index) => (
                <li key={index}>
                  <i className='fas fa-check'></i> {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
