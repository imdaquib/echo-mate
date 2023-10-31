import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { deleteComment } from '../../actions/post';

const CommentItem = ({
  comment: { name, text, avatar, _id, date, user },
  auth,
  postId,
  deleteComment,
}) => {
  return (
    <div className='container-fluid m-3'>
      <div className='card' style={{width:'64rem'}}>
        <div className='row '>

          <div className='col-2 text-center'>
            <Link to={`/profile/${user}`}>
              <img
                className='responsive-img rounded mt-1'
                src={avatar}
                width={50}
                height={50}
                alt=''
              />
            </Link>
            <h6 className=''>{name}</h6>
          </div>

          <div className='col-9'>
            <p className='text-start mt-3'>{text}</p>
            <small className='fst-italic'>
              {' '}
              
                Posted on <Moment format='DD-MM-YYYY'>{date}</Moment>
            </small>
          </div>

          <div className='col-1 text-end mt-3'>
            {!auth.loading && user === auth.user._id && (
              <button
                type='button'
                className='btn '
                onClick={(e) => deleteComment(postId, _id)}
              >
                <i className='fas fa-trash '></i>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

CommentItem.propTypes = {
  comment: PropTypes.object.isRequired,
  postId: PropTypes.number.isRequired,
  auth: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { deleteComment })(CommentItem);
