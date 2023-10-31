import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { addLike, removeLike, deletePost } from '../../actions/post';

const PostItem = ({
  post: { _id, text, name, avatar, user, likes, comments, date },
  auth,
  addLike,
  removeLike,
  deletePost,
  showActions,
}) => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className="card mb-3">
          <div className="card-header ">
            
          <div className='text-center mt-2'>
          <Link to={`/profile/${user}`} className='text-primary m-2'>
            <img
              className='responsive-img rounded'
              height={50}
              width={50}
              src={avatar}
              alt=''
            />
          </Link>
          <h6 className=''>{name}</h6>
        </div>
          </div>

          <div className="card-body">

          <p className='text-end fst-italic'>
            Posted on <Moment format='DD-MM-YYYY'>{date}</Moment>
          </p>
      

        {/* <div className='col-10'> */}
        <p className=''>{text}</p>

        {showActions && (
          <Fragment>
            <button type='button' className='btn' onClick={(e) => addLike(_id)}>
              <i className='fas fa-thumbs-up'></i>{' '}
              <span>{likes.length > 0 && <span> {likes.length} </span>}</span>
            </button>

            <button
              type='button'
              className='btn'
              onClick={(e) => removeLike(_id)}
            >
              <i className='fas fa-thumbs-down'></i>
            </button>

            <Link to={`/posts/${_id}`} className='btn btn-light btn-sm'>
              Discussion{' '}
              {comments.length > 0 && (
                <span className='comment-count'>{comments.length}</span>
              )}
            </Link>

            {!auth.loading && user === auth.user._id && (
              // <button
              // type="button"
              // className="btn btn-light"

              // >
              <i onClick={(e) => deletePost(_id)} className='fas fa-trash'></i>
              // </button>
            )}
          </Fragment>
        )}

        {/* </div> */}
          </div>
        </div>

       

      </div>
    </div>
  );
};

PostItem.defaultProps = {
  showActions: true,
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
  PostItem
);
