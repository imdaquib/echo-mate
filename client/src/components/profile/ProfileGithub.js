import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { getGithubRepos } from '../../actions/profile';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';

const ProfileGithub = ({ getGithubRepos, username, repos }) => {
  useEffect(() => {
    getGithubRepos(username);
  }, [getGithubRepos]);

  return (
    <div className=''>
      <h2 className='text-decoration-underline'>Github Repos</h2>
      <div className="">
      {repos === null ? (
        <Spinner />
      ) : (
            repos.map(repo=>(
        <div key={repo.id} className='row mb-2'>
             <div className='col-9'>
             <h4 >
                    <a  href={repo.html_url} className='link link-dark' target='_blank' rel='noopener noreferrer'>{repo.name}</a>
              </h4>
              <p>{repo.description}</p>
             </div>

             <div className='right-align col-3'>
                   <ul className='list-group'>
                         <li className="list-group-item">
                               Stars : {repo.stargazers_count}
                         </li>
                         <li className="list-group-item">
                               Watchers : {repo.watchers_count}
                         </li>
                         <li className="list-group-item">
                               Forks : { repo.forks_count}
                         </li>
                   </ul>
             </div>

             <hr />
        </div>
        
        
     
            ))
      )}
      </div>
    </div>
  );
};

ProfileGithub.propTypes = {
  getGithubRepos: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired,
  username: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  repos: state.profile.repos,
});

export default connect(mapStateToProps, { getGithubRepos })(ProfileGithub);
