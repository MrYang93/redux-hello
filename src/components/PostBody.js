import React, { Component } from 'react';
import { connect } from 'react-redux';


class PostBody extends Component {
  render(){
    return(
      <div className="post-body">
        <div className="comment-num">
           { this.props.comments.length }---
           { this.props.id }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  comments: state.comments
});

export default connect(mapStateToProps)(PostBody);
