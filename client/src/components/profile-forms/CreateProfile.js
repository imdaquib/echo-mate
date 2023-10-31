import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile } from '../../actions/profile';
import { Fragment } from 'react';

const CreateProfile = ({ createProfile, history }) => {
  const [formData, setFormData] = useState({
    company: '',
    website: '',
    location: '',
    status: '',
    skills: '',
    githubusername: '',
    bio: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    instagram: '',
    youtube: '',
  });

  const [socialInputs, toggleSocialInputs] = useState(false);
  const {
    company,
    website,
    location,
    status,
    skills,
    githubusername,
    bio,
    facebook,
    twitter,
    linkedin,
    instagram,
    youtube,
  } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history);
  };

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='card' style={{ width: '50rem', marginLeft: '15%' }}>
          <div className='card-header text-center'>
            <h1 className=''>Create Your Profile</h1>
            <h5 className=''>
              <i className='fas fa-user'></i> Let's get some information to make
              your profile stand out
            </h5>
          </div>

          <div className='card-body'>
            <form className='form' onSubmit={(e) => onSubmit(e)} autoComplete='off'>
              {/* <div className='form-group'> */}
              {/* <select name='status' onChange={(e) => onChange(e)} value={status}>
            <option value='0'>* Select Professional Status</option>
            <option value='Developer'>Developer</option>
            <option value='Junior Developer'>Junior Developer</option>
            <option value='Senior Developer'>Senior Developer</option>
            <option value='Manager'>Manager</option>
            <option value='Student or Learning'>Student or Learning</option>
            <option value='Instructor'>Instructor or Teacher</option>
            <option value='Intern'>Intern</option>
            <option value='Other'>Other</option>
          </select> */}

              <div className='form-group mb-3'>
                <small className='fs-6'>Professional status</small>
                <input
                  className='form-control form-control-sm'
                  type='text'
                  placeholder='Status'
                  name='status'
                  onChange={(e) => onChange(e)}
                  value={status}
                />
              </div>

              {/* </div> */}

              <div className='form-group mb-3'>
                <small className='fs-6'>Company</small>
                <input
                  className='form-control form-control-sm'
                  type='text'
                  placeholder='Company'
                  name='company'
                  onChange={(e) => onChange(e)}
                  value={company}
                />
              </div>

              <div className='form-group mb-3'>
                <small className='fs-6'>Website</small>
                <input
                  className='form-control form-control-sm'
                  type='text'
                  placeholder='Website'
                  name='website'
                  onChange={(e) => onChange(e)}
                  value={website}
                />
              </div>

              <div className='form-group mb-3'>
                <small className='fs-6'>Location (City & State)</small>
                <input
                  className='form-control form-control-sm'
                  type='text'
                  placeholder='Location'
                  name='location'
                  onChange={(e) => onChange(e)}
                  value={location}
                />
              </div>

              <div className='form-group mb-3'>
                <small className='fs-6'>
                  Skills (eg. HTML,CSS,JavaScript,PHP)
                </small>
                <input
                  className='form-control form-control-sm'
                  type='text'
                  placeholder='* Skills'
                  name='skills'
                  onChange={(e) => onChange(e)}
                  value={skills}
                />
              </div>

              <div className='form-group mb-3'>
                <small className='fs-6'>Github link with username</small>
                <input
                  className='form-control form-control-sm'
                  type='text'
                  placeholder='Github Username'
                  name='githubusername'
                  onChange={(e) => onChange(e)}
                  value={githubusername}
                />
              </div>

              <div className='form-group mb-3'>
                <small className='fs-6'>Tell us a little about yourself</small>
                <textarea
                  className='form-control form-control-sm'
                  placeholder='A short bio of yourself'
                  name='bio'
                  onChange={(e) => onChange(e)}
                  value={bio}
                ></textarea>
              </div>

              <div className='mb-4'>
                <button
                  type='button'
                  onClick={(e) => toggleSocialInputs(!socialInputs)}
                  className='btn btn-secondary btn-sm'
                >
                  Add Social Network Links
                </button>
                <span className='text-secondary'>Optional</span>
              </div>

              {socialInputs && (
                <Fragment>
                  <div className='row form-group social-input mb-2'>
                    <div className='col-2 text-center'>
                      <i className='fab fa-twitter fa-2x'> </i>
                    </div>
                    <div className='col-10'>
                      <input
                        className='form-control form-control-sm'
                        type='text'
                        placeholder='Twitter URL'
                        name='twitter'
                        onChange={(e) => onChange(e)}
                        value={twitter}
                      />
                    </div>
                  </div>

                  <div className='row form-group social-input mb-2'>
                    <div className='col-2 text-center'>
                      <i className='fab fa-facebook fa-2x'></i>
                    </div>
                    <div className='col-10'>
                      <input
                        className='form-control form-control-sm'
                        type='text'
                        placeholder='Facebook URL'
                        name='facebook'
                        onChange={(e) => onChange(e)}
                        value={facebook}
                      />
                    </div>
                  </div>

                  <div className='row form-group social-input mb-2'>
                    <div className='col-2 text-center'>
                      <i className='fab fa-youtube fa-2x'></i>
                    </div>
                    <div className='col-10'>
                      <input
                        className='form-control form-control-sm'
                        type='text'
                        placeholder='YouTube URL'
                        name='youtube'
                        onChange={(e) => onChange(e)}
                        value={youtube}
                      />
                    </div>
                  </div>

                  <div className='row form-group social-input mb-2'>
                    <div className='col-2 text-center'>
                      <i className='fab fa-linkedin fa-2x'></i>
                    </div>
                    <div className='col-10'>
                      <input
                        className='form-control form-control-sm'
                        type='text'
                        placeholder='Linkedin URL'
                        name='linkedin'
                        onChange={(e) => onChange(e)}
                        value={linkedin}
                      />
                    </div>
                  </div>

                  <div className='row form-group social-input mb-4'>
                    <div className='col-2 text-center'>
                      <i className='fab fa-instagram fa-2x'></i>
                    </div>
                    <div className='col-10'>
                      <input
                        className='form-control form-control-sm'
                        type='text'
                        placeholder='Instagram URL'
                        name='instagram'
                        onChange={(e) => onChange(e)}
                        value={instagram}
                      />
                    </div>
                  </div>
                </Fragment>
              )}
              <input type='submit' className='btn btn-dark btn-sm' />

              <a className='btn btn-dark btn-sm' href='/dashboard'>
                Go Back
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
};

export default connect(null, { createProfile })(CreateProfile);
