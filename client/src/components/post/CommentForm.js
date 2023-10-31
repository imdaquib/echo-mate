import React,{useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import { addComment } from '../../actions/post';

const CommentForm = ({postId,addComment}) => {
  const [text, setText] = useState('')
  return  (
    <div className='container-fluid'>
           <div className="row">

        <div className="">
          <h3>Leave A Comment</h3>
        </div>
        <hr />
        <form className="form" 
        onSubmit={e=>{
          e.preventDefault();
          addComment(postId, { text})
          setText('')
        }}>
          <textarea
            name="text"
            className='form-control'
            value={text}
            onChange={e=>setText(e.target.value)}
            
            placeholder="Comment on this post"
            required
          ></textarea>
          <input type="submit" className="btn btn-dark btn-sm" value="Submit" />
        </form>
      </div>
     </div>
  )
}

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
}

export default connect(null, { addComment })(CommentForm)