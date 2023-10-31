// import axios from 'axios';
import React, { Fragment, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { login } from '../../actions/auth';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../../index.css';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    login(email, password);
    // console.log(formData);
    // console.log('success');

    // const newUser = {email, password} ;
    // try {
    //   const config = {
    //     headers: { 'Content-Type' : 'application/json'}
    //   }
    //   const body =  JSON.stringify(newUser);
    //   const res = await axios.post('/api/auth', body, config);
    //   console.log(res.data);
    // } catch (err) {
    //   console.error(err.response.data );
    // }
  };

  // Redirect to dashboard if logged in
  if (isAuthenticated) {
    return <Navigate to='/dashboard' />;
  }

  return (
    <Fragment>
      <div className='container-fluid'>
        <div
          className='row align-items-center text-center'
          style={{ height: '500px' }}
        >
          <div
            className='card center'
            style={{ width: '23rem', height: '27rem' }}
          >
            <div className='card-header'>
              <h1 className='large blue-text text-darken-4'>Sign In</h1>
              <h5 className='lead'>
                <i className='fas fa-user'></i> Sign into Your Account
              </h5>
            </div>

            <div className='card-body'>
              <form
                className='form'
                onSubmit={(e) => onSubmit(e)}
                autocomplete='off'
              >
                <div className='form-group mb-2'>
                  <input
                    className='form-control'
                    type='email'
                    placeholder='Email Address'
                    name='email'
                    value={email}
                    onChange={(e) => onChange(e)}
                    required
                  />
                </div>
                <div className='form-group'>
                  <input
                    className='form-control'
                    type='password'
                    placeholder='Password'
                    name='password'
                    value={password}
                    onChange={(e) => onChange(e)}
                  />
                </div>
                <input type='submit' className='btn btn-dark' value='Login' />
              </form>
            </div>

            <p className='my-1'>
              Don't have an account? <Link to='/register'>Register</Link>
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated, // it redirect to home page if logged in
});

export default connect(mapStateToProps, { login })(Login);
