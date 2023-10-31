import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExperience } from '../../actions/profile';

const AddExperience = ({ addExperience }) => {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    from: '',
    current: false,
    to: '',
    description: '',
  });

  const [toDateDisable, toggleDisable] = useState(false);

  const { title, company, location, from, current, to, description } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // console.log(e.target.name);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    addExperience(formData);
  };

  
  return (
    <div className='container-fluid'>
      <div className="row">
        <div className="card " style={{ width: '60rem', marginLeft: '8%' }}>
          <div className="card-header text-center m-3">
      <h1 className='large blue-text text-darken-4'>  <i className='fab fa-black-tie'></i> Add Your Experience</h1>
            
          </div>
          <div className="card-body">
              
     
     
      <form className='form' onSubmit={(e) => onSubmit(e)} autoComplete='off'>
        <div className='form-group mb-3'>
          <input
          className='form-control form-control-sm'
            type='text'
            placeholder='* Job Title'
            name='title'
            value={title}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className='form-group mb-3'>
          <input
          className='form-control form-control-sm'

            type='text'
            placeholder='* Company'
            name='company'
            value={company}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className='form-group mb-3'>
          <input
          className='form-control form-control-sm'

            type='text'
            placeholder='Location'
            name='location'
            value={location}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className='form-group mb-3'>
          <h5>From Date</h5>
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
              type='checkbox'
              name='current'
              value={current}
              checked={current}
              onChange={(e) => {
                setFormData({ ...formData, current: !current })
                toggleDisable(!toDateDisable);
              }}
            />{' '}
            Current Job
          </p>
        </div>
        <div className='form-group mb-3'>
          <h5>To Date</h5>
          <input
          className='form-control form-control-sm'

            type='date'
            name='to'
            value={to}
            onChange={(e) => onChange(e)}
            disabled={toDateDisable ? 'disabled' : ''}
          />
        </div>
        <div className='form-group mb-3'>
          <textarea
          className='form-control form-control-sm'

            name='description'
            cols='30'
            rows='5'
            placeholder='Job Description'
            value={description}
            onChange={(e) => onChange(e)}
          ></textarea>
        </div>
        <input type='submit' className='btn btn-sm btn-dark' />
        <a className='btn btn-sm btn-dark' href='/dashboard'>
          Go Back
        </a>
      </form>
    </div>
    </div>
        </div>
      </div>
  );
};

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired,
};

export default connect(null, { addExperience })(AddExperience);
