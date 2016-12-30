import React, { Component } from 'react';
import { connect } from 'react-redux';


class PostBody extends Component {
  render(){
    return(
      <div className="post-body">
      <div className="likes-num num">
        23 喜欢
      </div>
        <div className="comment-num num">
          { this.props.comments[this.props.postId].length } 评论
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  comments: state.comments
});

export default connect(mapStateToProps)(PostBody);
