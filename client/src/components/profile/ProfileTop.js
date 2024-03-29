import React from 'react';
import PropTypes from 'prop-types';

const ProfileTop = ({
  profile: {
    status,
    location,
    website,
    company,
    social,
    user: { name, avatar },
  },
}) => {
  return (
    <div
      className='container  mb-4 text-center'
      style={{ height: '35rem', width: '25rem' }}
    >
      <img
        src={avatar}
        className='responsive-img rounded mt-2'
        width={'100%'}
        alt=''
      />

      <h1 className='large'>{name}</h1>

      <p className='lead'>
        {status} {company && <span> at {company} </span>}
      </p>
      <p>{location && <span> {location} </span>}</p>
      <div className='icons my-1'>
        {website && (
          <a
            className=''
            href={website}
            target='_blank'
            rel='nooper noreferrer'
          >
            <i className='fas fa-globe fa-2x'></i>
          </a>
        )}
        {social && social.twitter && (
          <a
            className='m-1'
            href={social.twitter}
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-twitter fa-2x'></i>
          </a>
        )}
        {social && social.facebook && (
          <a href={social.facebook} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-facebook fa-2x'></i>
          </a>
        )}
        {social && social.linkedin && (
          <a href={social.linkedin} target='_blank' rel='noopener norefferer'>
            <i className='fab fa-linkedin fa-2x'></i>
          </a>
        )}
        {social && social.instagram && (
          <a href={social.instagram} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-instagram fa-2x'></i>
          </a>
        )}
        {social && social.youtube && (
          <a href={social.youtube} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-youtube fa-2x'></i>
          </a>
        )}
      </div>
    </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileTop;
