import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteEducation } from '../../actions/profile';

const Education = ({ education, deleteEducation }) => {
  const educations = education.map((edu) => (
    <tr key={edu._id}>
      <td>{edu.school}</td>
      <td className='hide-sm'>{edu.degree}</td>
      <td>
        <Moment format='YYYY'>{edu.from}</Moment> -{' '}
        {!edu.to ? 'Now' : <Moment format='YYYY'>{edu.to}</Moment>}
      </td>
      <td>
        <button className='btn btn-sm btn-secondary' onClick={()=> deleteEducation(edu._id)}>Delete</button>
      </td>
    </tr>
  ));
  return (
    <div className='container-fluid mb-2'>
      <div className="row">
        <div className="card">
          <div className="card-header">
          <h2 className='my-2'>Education Credentials</h2>

          </div>

          <div className="card-body">
          <table className='table'>
        <thead>
          <tr>
            <th>School</th>
            <th className='hide-sm'>Degree</th>
            <th className='hide-sm'>Years</th>
            <th className='hide-sm'>Action</th>
          </tr>
        </thead>
        <tbody>{educations}</tbody>
      </table>
          </div>
        </div>
      </div>
     
    </div>
  );
};

Education.propTypes = {
  education: PropTypes.array.isRequired,
  deleteEducation: PropTypes.func.isRequired,
};

export default connect(null, {deleteEducation})(Education);
