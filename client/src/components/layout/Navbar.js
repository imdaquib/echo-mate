import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/auth';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    // <nav className='navbar navbar-expand-lg navbar-dark bg-dark '>
    //   <div className="container-fluid">
    <ul className='navbar-nav mr-auto mb-2 mb-lg-0 '>
      <li className='nav-item'>
        <Link to='/profiles' className='nav-link'>
          {' '}
          <i className='fa fa-user' />
          Developers
        </Link>
      </li>
      <li className='nav-item'>
        <Link to='/dashboard' className='nav-link'>Dashboard</Link>
      </li>
      <li className='nav-item'>
        <Link to='/posts' className='nav-link'>Posts</Link>
      </li>
      <li className='nav-item'>
        <Link to='/' onClick={logout} className='nav-link'>
          <i className='fa fa-sign-out-alt' />{' '}
          <span className='hide-sm'> Logout</span>
        </Link>
      </li>
    </ul>
    // </div>
    //  </nav>
  );

  const guestLinks = (
    <ul className='navbar-nav mr-auto mb-2 mb-lg-0 '>
      <li className='nav-item'>
        <Link className='nav-link' to='/profiles'>
          Developers
        </Link>
      </li>

      <li className='nav-item'>
        <Link className='nav-link' to='/register'>
          Register
        </Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' to='/login'>
          Login
        </Link>
      </li>
    </ul>
  );
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark '>
      <div className='container-fluid'>
        <Link to='/' className='navbar-brand'>
          <img
            src='ecomate.png'
            alt=''
            width='30'
            height='24'
            className='d-inline-block align-text-top'
          />
          EchoMate 
        </Link>

        {!loading && (
          <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
        )}
        {/* </div> */}
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
