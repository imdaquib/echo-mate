import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllProfile } from '../../actions/profile';
import Spinner from '../layout/Spinner';
import ProfileItem from './ProfileItem';
import '../../index.css'

const Profiles = ({ profile: { profiles, loading }, getAllProfile }) => {
  useEffect(() => {
    getAllProfile();
  }, [getAllProfile]);

  return (
    <Fragment>
      <div className='container-fluid'>
        <div className='row'>
          {/* <div className="card"> */}

          {loading ? (
            <Spinner />
          ) : (
            <Fragment>
              <div className='card-header text-center'>
                <h1 className='mb-3'>Developers</h1>
                <h5 className='lead'>
                  <i className='fas fa-globe'></i> Connect with the developers
                </h5>
              </div>
              <hr />

              <div className='card-body'>
                <div className='profiles'>
                  {profiles.length > 0 ? (
                    profiles.map((profile) => (
                      <ProfileItem key={profile._id} profile={profile} />
                    ))
                  ) : (
                    <div className="container" style={{height: '20rem', display:'flex', justifyContent:'center', alignItems:'center'}}>

                    <h3 className='text-center p-10'>No Profile Found</h3>

                    </div>
                  )}
                </div>
              </div>
            </Fragment>
          )}
        </div>
      </div>

      {/* </div> */}
    </Fragment>
  );
};

Profiles.propTypes = {
  profile: PropTypes.object.isRequired,
  getAllProfile: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});
export default connect(mapStateToProps, { getAllProfile })(Profiles);
