import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { deleteExperience } from '../../actions/profile';

const Experience = ({ experience, deleteExperience }) => {
  const experiences = experience.map((exp) => (
    <tr key={exp._id}>
      <td> {exp.company} </td>
      <td className='hide-sm'>{exp.title}</td>
      <td>
        <Moment format='YYYY'>{exp.from}</Moment> - {' '}
        {!exp.to ? 'Present' : <Moment format='YYYY'>{exp.to}</Moment>}
      </td>
      <td>
        <button className='btn btn-secondary btn-sm'  onClick={()=> deleteExperience(exp._id)}>Delete</button>
      </td>
    </tr>
  ));
  return (
    <div className='container-fluid'>
      <div className="row">

    <div className="card">
      <div className="card-header">
      <h2 className=''>Work Experience</h2>

      </div>
      <div className="card-body">
      <table className='table'>
        <thead>
          <tr>
            <th>Company</th>
            <th className='hide-sm'>Title</th>
            <th className='hide-sm'>Year</th>
            <th className='hide-sm'>Action</th>
          </tr>
        </thead>
        <tbody>{experiences}</tbody>
      </table>
      </div>
    </div>
     
    </div>
    </div>
  );
};

Experience.propTypes = {
  experience: PropTypes.array.isRequired,
  deleteExperience: PropTypes.func.isRequired,
};

export default connect(null, {deleteExperience})(Experience);
