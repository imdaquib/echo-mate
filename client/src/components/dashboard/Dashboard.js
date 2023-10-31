import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import DashboardActions from './DashboardActions';
import Education from './Education';
import Experience from './Experience';

const Dashboard = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading },
  deleteAccount
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <div className='container-fluid'>
      <Fragment>
        <div className="conatainer-fluid">
          <div className="mt-3">
          <h1 className='text-center text-decoration-underline'>Dashboard</h1>
        <h4 className=''>
          <i className='fa fa-user' /> Welcome <i className='text-secondary'> {user &&  user.name}</i>
        </h4>
          </div>
        </div>
        <hr />
        

        {profile !== null ? (
          <Fragment>
            <DashboardActions />
            <Education education={profile.education} />
            <Experience experience={profile.experience} />

            <div className="my-2">
              <button className=" btn btn-secondary btn-sm" style={{marginTop: '10px'}} onClick={()=> deleteAccount() }>
                <i className="fas fa-user-minus"> {' '}</i> Delete Account
              </button>
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <div className='text-center center'>
            <h2>Setup your profile</h2>
            <Link to='/create-profile' className='btn btn-dark btn-sm'>
                Create Profile
            </Link>
            </div>
            
          </Fragment>
        )}
      </Fragment>
     </div>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  deleteAccount: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(Dashboard);
