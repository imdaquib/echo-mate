import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProfileById } from '../../actions/profile';
import Spinner from '../layout/Spinner';
import { Link, useParams } from 'react-router-dom';
import ProfileTop from './ProfileTop';
import ProfileAbout from './ProfileAbout';
import ProfileExperience from './ProfileExperience';
import ProfileEducation from './ProfileEducation';
import ProfileGithub from './ProfileGithub';

const Profile = ({ getProfileById, profile: { profile, loading }, auth }) => {
  let { id } = useParams(); /// it fetches the id from the url

  useEffect(() => {
    getProfileById(id);
  }, [getProfileById, id]);

  return (
    <div className='container'>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <Link to='/profiles' className='btn btn-dark btn-sm'>
            Back to Profiles
          </Link>

          <div className='container-fluid'>
            <div className='row'>
              <div className='card'>
                <div className='card-header'>
                  <ProfileTop profile={profile} />
                  <hr />
                  <ProfileAbout profile={profile} />
                </div>

                <div className='card-body'>

                  {/* <div className="row"> */}
                  <div className=''>
                    <h2 className='text-decoration-underline'> Experience</h2>
                    <div className=''>
                      {profile.experience.length > 0 ? (
                        <Fragment>
                          {profile.experience.map((experience) => (
                            <ProfileExperience
                              experience={experience}
                              key={experience._id}
                            />
                          ))}
                        </Fragment>
                      ) : (
                        <h5 className='text-secondary'>No Experience</h5>
                      )}
                    </div>
                  </div>
                  <hr />

                  <div className=''>
                    <h2 className='text-decoration-underline'> Education</h2>
                    <div className=''>
                      {profile.education.length > 0 ? (
                        <Fragment>
                          {profile.education.map((education) => (
                            <ProfileEducation
                              key={education._id}
                              education={education}
                            />
                          ))}
                        </Fragment>
                      ) : (
                        <h5 className='text-secondary'>No Education </h5>
                      )}
                    </div>
                  </div>
                  <hr />

                  {profile.githubusername && (
                    <ProfileGithub username={profile.githubusername} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.profile,
});

export default connect(mapStateToProps, { getProfileById })(Profile);
