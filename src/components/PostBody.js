import React, { Component } from 'react';
import { connect } from 'react-redux';


class PostBody extends Component {
  render(){
    return(
      <div className="post-body">
        <div className="likes-num num">
          { this.props.posts[this.props.postId - 1].likes } 喜欢
        </div>
        <div className="comment-num num">
          { this.props.comments[this.props.postId].length } 评论
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  comments: state.comments,
  posts: state.posts
});

export default connect(mapStateToProps)(PostBody);
