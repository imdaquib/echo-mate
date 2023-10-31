import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import {useHistory } from 'react-router-dom';
import { addEducation } from '../../actions/profile';
import { Navigate } from 'react-router-dom';

const AddEducation = ({ addEducation }) => {
  const [formData, setFormData] = useState({
    school: '',
    degree: '',
    fieldofstudy: '',
    from: '',
    current: false,
    to: '',
    description: '',
  });

  const [toDateDisabled, toggleDisabled] = useState(false);

  const { school, degree, fieldofstudy, from, current, to, description } =
    formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    //     console.log(e.target.name);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    addEducation(formData);
    //   console.log(formData);
    return <Navigate to='/dashboard' />;
  };

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='card' style={{ width: '60rem', marginLeft: '8%' }}>
          <div className='card-header text-center m-3'>
            <h1 className='large blue-text text-darken-4'>
              {' '}
              <i className='fas fa-graduation-cap'></i> Add Your Education
            </h1>
          </div>

          <div className='card-body'>
            <form
              className='form'
              onSubmit={(e) => onSubmit(e)}
              autoComplete='off'
            >
              <div className='form-group mb-3'>
                <input
                  className='form-control form-control-sm'
                  type='text'
                  placeholder='* School / University'
                  name='school'
                  value={school}
                  onChange={(e) => onChange(e)}
                />
              </div>

              <div className='form-group mb-3'>
                <input
                  className='form-control form-control-sm'
                  type='text'
                  placeholder='* Degree or Certificate'
                  name='degree'
                  value={degree}
                  onChange={(e) => onChange(e)}
                />
              </div>

              <div className='form-group mb-3'>
                <input
                  className='form-control form-control-sm'
                  type='text'
                  placeholder='Field Of Study'
                  name='fieldofstudy'
                  value={fieldofstudy}
                  onChange={(e) => onChange(e)}
                />
              </div>

              <div className='form-group mb-3'>
                <h6>From Date</h6>
                <input
                  className='form-control form-control-sm'
                  type='date'
                  name='from'
                  value={from}
                  onChange={(e) => onChange(e)}
                />
              </div>

              <div className='form-group mb-3'>
                <p>
                  <input
                    // className='form-control form-control-sm'
                    type='checkbox'
                    name='current'
                    checked={current}
                    value={current}
                    onChange={(e) => {
                      setFormData({ ...formData, current: !current });
                      toggleDisabled(!toDateDisabled);
                    }}
                  />{' '}
                  Present
                </p>
              </div>
              <div className='form-group mb-3'>
                <h6>To Date</h6>
                <input
                  className='form-control form-control-sm'
                  type='date'
                  name='to'
                  value={to}
                  onChange={(e) => onChange(e)}
                  disabled={toDateDisabled}
                />
              </div>

              <div className='form-group mb-3'>
                <textarea
                  className='form-control form-control-sm'
                  name='description'
                  cols='30'
                  rows='5'
                  placeholder='Program Description'
                  value={description}
                  onChange={(e) => onChange(e)}
                ></textarea>
              </div>
              <input type='submit' className='btn btn-dark btn-sm' />
              <a className='btn btn-dark btn-sm' href='/dashboard'>
                Go Back
              </a>
            </form>
          </div>
        </div>
      </div>

      {/* <small>* = required field</small> */}
    </div>
  );
};

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired,
};

export default connect(null, { addEducation })(AddEducation);
